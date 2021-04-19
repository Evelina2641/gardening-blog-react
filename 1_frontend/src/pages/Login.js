import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthenticationConext } from '../App';
import './Login.css'
import Button from '../components/Button';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const authentication = useContext(AuthenticationConext);

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post('http://localhost:5000/login', { username, password })
      .then((res) => {
        if (res.data.authenticated) {
          authentication.setAutheticated(true);
          localStorage.setItem('authenticated', 'true');
        } else {
          console.log('Login failed');
        }
      });
  }

  return (
    <main className='login'>
      <div className='container'>
        <h1>Log In</h1>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <label>Username:</label>
            <input
              type='text'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className='form-control'>
            <label>Password:</label>
            <input
              type='text'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='form-control'>
          <Button text='Log in' type='submit'/>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Login;
