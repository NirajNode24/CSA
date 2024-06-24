// CustomerServiceForm.js

// import React, { useState } from 'react';
import './CustomerServiceForm.css';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};
const CustomerServiceForm = () => {

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

  // const [userId, setUserId] = useState(''); // Assuming userId is obtained after authentication
  const [category, setCategory] = useState('');
  const [comments, setComments] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestBody = {
      userId: user.displayName,
      category,
      comments,
    };

    try {
      const response = await fetch('http://localhost:3000/customer-service/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
    navigate('/list');

        // Handle successful submission (e.g., show success message)
        console.log('Customer service request submitted successfully!');
      } else {
        // Handle error response
        console.error('Failed to submit customer service request:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting customer service request:', error);
    }
  };

  return (
    <div >
     <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
  <button onClick={handleLogout} style={{ margin: '10px' }}>Logout</button>
</div>
      <div className="CustomerServiceForm">
      <h2>Customer Service Request Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Category:
          {/* <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} /> */}
          <select onChange={(e) => setCategory(e.target.value)}>
            <option value="">--select--</option>

            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </label>
        <br />
        <label>
          Comments:
          <textarea value={comments} onChange={(e) => setComments(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit Request</button>
      </form>
    </div>
    </div>
   
  );
};

export default CustomerServiceForm;
