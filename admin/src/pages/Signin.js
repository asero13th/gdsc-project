import React, { useState, useEffect } from 'react';
import { useNavigate, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('https://gdsc-main-site.onrender.com/v1/admin/login', { email, password });
      console.log(response)
      if (response.status === 200) {
        const token = response.data.accessToken;
        const decoded = jwt_decode(token);

        localStorage.setItem('token', token);
        localStorage.setItem('isAdmin', true);
        navigate('/admin/project');
      } else {
        setError('Incorrect email or password');
      }
    } catch (error) {
      console.error(error);
      setError('An error occurred, please try again later');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin} method='post' action='https://gdsc-main-site.onrender.com/v1/admin/login'>
        <label>
          Email:
          <input className='input mb-3' type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input className='input' type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <br />
        <button className='btn btn-success mt-3' type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Login