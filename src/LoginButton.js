import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginButton.css';

const LoginButton = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const handleLogin = () => {
    // Redirect to Google OAuth
    window.location.href = 'http://localhost:3000/auth/google';
  };

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await fetch('http://localhost:3000/auth/google/callback', {
          credentials: 'include',
        });

        if (response.ok) {
          const data = await response.json();
          if (data.success) {
            setUser(data.user);
            setIsLoggedIn(true);
            navigate('/dashboard'); // Navigate to a different route after login
          }
        }
      } catch (error) {
        console.error('Error fetching auth status:', error);
      }
    };

    checkAuthStatus();
  }, [setIsLoggedIn, navigate]);

  return <button className="login-button" onClick={handleLogin}>Login with Google</button>;
};

export default LoginButton;
