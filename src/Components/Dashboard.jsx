// Dashboard.js// Dashboard.js
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const query = useQuery();
  const navigate = useNavigate();

  useEffect(() => {
    const name = query.get('name');
    const photo = query.get('photo');

    if (name && photo) {
      setUser({ displayName: name, photo });
    }
  }, [query]);

  const handleLogout = async () => {
    await fetch('http://localhost:3001/logout', {
      credentials: 'include'
    });
    setUser(null);
    navigate('/');
  };

  return (
    <div id="dashboard">
      {user ? (
        <div>
          <h1>Welcome, {user.displayName}</h1>
          <img src={user.photo} alt={user.displayName} />
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        'Not authenticated'
      )}
    </div>
  );
};

export default Dashboard;
