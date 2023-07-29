import { useState } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { BACKEND_IP, BACKEND_PORT } from '../settings';

export default function Clicker() {
    const [username, setUsername] = useState('');
    const [clicks, setClicks] = useState(0);
    const [inputUsername, setInputUsername] = useState('');

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
        </Container>
    );
}