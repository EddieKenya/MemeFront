import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosInstance';
import bgImg from '../assets/oil.jpeg';
import '../styles/log.css';
import { Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPosting, setIsPosting] = useState(false);
  const [errorMessages, setErrorMessages] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const refreshAccessToken = async () => {
      try {
        const refreshToken = localStorage.getItem('refreshToken');
        if (refreshToken) {
          const response = await axiosInstance.post('api/token/refresh/', {
            refresh: refreshToken,
          });
          if (response.data.access) {
            localStorage.setItem('accessToken', response.data.access);
          }
        }
      } catch (error) {
        // Handle error
      }
    };

    // Refresh every 30 minutes (1800000 milliseconds)
    const intervalId = setInterval(refreshAccessToken, 1800000);
    return () => clearInterval(intervalId);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsPosting(true);
    setErrorMessages({});

    try {
      const response = await axiosInstance.post('api/token/', {
        email: email,
        password: password,
      });

      if (response.data.access && response.data.refresh) {
        localStorage.setItem('accessToken', response.data.access);
        localStorage.setItem('refreshToken', response.data.refresh);
        navigate('/'); // Redirect to home page
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setErrorMessages(error.response.data);
      } else {
        setErrorMessages({ network: 'Site cannot be reached. Please try again later.' });
      }
    } finally {
      setIsPosting(false);
    }
  };

  return (
    <div className="App">
      <div className="register">
        <div className="col-1">
          <h2>Sign In</h2>
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
              {isPosting ? 'Loading...' : 'Sign In'}
            </button>
            <p className='accpresent'>Don't have an Account? <Link to="/signup">SignUp</Link></p>
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

export default SignIn;
