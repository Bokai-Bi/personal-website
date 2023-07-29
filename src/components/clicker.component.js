import { useState } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { BACKEND_IP, BACKEND_PORT } from '../settings';

export default function Clicker() {
    const [username, setUsername] = useState('');
    const [clicks, setClicks] = useState(0);
    const [inputUsername, setInputUsername] = useState('');
    const [allUsers, setAllUsers] = useState([]);
    const [allShame, setAllShame] = useState([]);

    function populateUsers() {
        axios.get(`http://${BACKEND_IP}:${BACKEND_PORT}/clicker`)
              .then(res => {
                const entries = res.data;
                entries.sort((a, b) => {
                    return ((a.clicks > b.clicks) ? -1 : 1);
                });
                setAllUsers(entries.filter(entry => entry.clicks < 100000)); // DO NOT SET AT 99999 PLEASE >_<
                setAllShame(entries.filter(entry => entry.clicks >= 100000));
              })
              .catch(err => console.log(`Failed to get all users, err: ${err}`));
    }

    function Leaderboard() {
        return (
        <>
        <h1>Leaderboard</h1>
          <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Clicks</th>
                    <th>Last Clicked</th>
                </tr>
            </thead>
            <tbody>
                {allUsers.map(user => {
                    return (<tr>
                        <td>{user.username}</td>
                        <td>{user.clicks}</td>
                        <td>{user.date}</td>
                    </tr>);
                })}
            </tbody>
          </Table>
        </>
        );
    }
    
    function PillarOfShame() {
        return (
            <>
            <h1 class='text-danger'><strong>Pillar of Shame</strong></h1>
            <Table striped bordered hover>
              <thead>
                  <tr>
                      <th>Username</th>
                      <th>Clicks</th>
                      <th>Last Clicked</th>
                  </tr>
              </thead>
              <tbody>
                  {allShame.map(user => {
                      return (<tr>
                          <td>{user.username}</td>
                          <td>{user.clicks}</td>
                          <td>{user.date}</td>
                      </tr>);
                  })}
              </tbody>
            </Table>
            </>
        );
    }

    function incrementClick(e) {
        if (username !== '' && username === inputUsername) {
            axios.post(`http://${BACKEND_IP}:${BACKEND_PORT}/clicker/add`, {username: username, clicks: clicks + 1});
            setClicks(clicks + 1);
        }
        else {
            if (inputUsername === ''){
                alert("Username cannot be empty!");
            }
            else{
                alert("Please first confirm your username!");
            }
        }
    }

    function onChangeInputUsername(e) {
        setInputUsername(e.target.value);
    }

    function getUser(e) {
        if (inputUsername === ''){
            alert("Username cannot be empty!");
            return;
        }
        axios.get(`http://${BACKEND_IP}:${BACKEND_PORT}/clicker/${inputUsername}`)
          .then(res => {
            if (res.data.username) {
                setUsername(res.data.username);
                setClicks(res.data.clicks);
                alert('User loaded successfully!');
            }
          })
          .catch(err => {
            axios.post(`http://${BACKEND_IP}:${BACKEND_PORT}/clicker/add`, {username: inputUsername, clicks: 0})
              .then(res => {
                setUsername(inputUsername);
                setClicks(0);
                alert("User created successfully!");
              })
              .catch(err => alert(`No such user ${inputUsername} and cannot create user, err: ${err}`));
          });
    }

    return(
        <Container>
            <br/>
            <Form.Control size='lg' type='text' placeholder='Enter your name here'
            onChange={onChangeInputUsername}/>
            <Button variant='primary' onClick={getUser}>Confirm Username</Button>
            <br/>
            <h1>Current clicks: {clicks}</h1>
            <Button variant='dark' onClick={incrementClick}>Click me!</Button>
            <br/>
            <Leaderboard />
            <PillarOfShame />
            <Button variant='info' onClick={populateUsers}>Update Leaderboard</Button>
        </Container>
    );
}