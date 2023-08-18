import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosInstance';
import bgImg from '../assets/oil.jpeg';
import '../styles/log.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [isPosting, setIsPosting] = useState(false);
  const [errorMessages, setErrorMessages] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPosting(true);
    setErrorMessages({});

    axiosInstance
      .post('users/register/', {
        email: email,
        username: username,
        first_name: firstName,
        last_name: lastName,
        password: password,
      })
      .then((res) => {
        if (Object.keys(errorMessages).length === 0) {
          navigate('/');
          
        }
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          setErrorMessages(error.response.data);
          
        } else {
          setErrorMessages({ network: 'Site cannot be reached. Please try again later.' });
        }
        setIsPosting(false);
      });
  };

  return (
    <div className="App">
      <div className="register">
        <div className="col-1">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit} className="flex flex-col">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              name="email"
            />
            {errorMessages.email && (
              <p className="error_msg">{errorMessages.email}</p>
            )}

            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              id="username"
              name="username"
            />
            {errorMessages.username && (
              <p className="error_msg">{errorMessages.username}</p>
            )}

            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              id="first_name"
              name="first_name"
            />
            {errorMessages.first_name && (
              <p className="error_msg">{errorMessages.first_name}</p>
            )}

            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              id="last_name"
              name="last_name"
            />
            {errorMessages.last_name && (
              <p className="error_msg">{errorMessages.last_name}</p>
            )}

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              name="password"
            />
            {errorMessages.password && (
              <p className="error_msg">{errorMessages.password}</p>
            )}

            <button
              type="submit"
              className="btn"
              onClick={handleSubmit}
              disabled={isPosting}
            >
              {isPosting ? 'Loading...' : 'Sign Up'}
            </button>
          </form>
          {errorMessages.network && (
            <p className="error_msg">{errorMessages.network}</p>
          )}
        </div>
        <div className="col-2">
          <img src={bgImg} alt="Background" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
