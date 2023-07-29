import { useState } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Clicker() {
    const [username, setUsername] = useState('');
    const [clicks, setClicks] = useState(0);
    const [inputUsername, setInputUsername] = useState('');

    function incrementClick(e) {
        if (username !== '') {
            setClicks(clicks + 1);
            axios.post('http://10.38.155.115:5140/clicker/add', {username: username, clicks: clicks});
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
        axios.get(`http://10.38.155.115:5140/clicker/${inputUsername}`)
          .then(res => {
            if (res.data.username) {
                setUsername(res.data.username);
                setClicks(res.data.clicks);
                alert('User loaded successfully!');
            }
            else {
                axios.post('http://10.38.155.115:5140/clicker/add', {username: inputUsername, clicks: 0})
                  .then(res => {
                    alert(res.data);
                  })
            }
          })
          .catch(err => alert(`No such user ${e.target.value}, err: ${err}`));
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