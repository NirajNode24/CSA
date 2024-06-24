// // App.js

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import LoginButton from './LoginButton';
// import CustomerServiceForm from './CustomerServiceForm';

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleLogin = () => {
//     // Simulate successful login
//     setIsLoggedIn(true);
//   };

//   const handleLogout = () => {
//     // Simulate logout
//     setIsLoggedIn(false);
//   };
// console.log("isLoggedIn",isLoggedIn)
//   return (
//     <Router>
//       <div className="App">
//         <header className="App-header">
//           <h1>Welcome to My App</h1>
//           {isLoggedIn ? (
//             <button onClick={handleLogout}>Logout</button>
//           ) : (
//             <LoginButton setIsLoggedIn={setIsLoggedIn}  />
//           )}
//         </header>
//         <Routes>
//           <Route path="/customer-service" element={isLoggedIn ? <CustomerServiceForm /> : <Navigate to="/" />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;import React, { useEffect, useState } from 'react';
// App.js// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';

import CustomerServiceForm from './CustomerServiceForm';
import List from './Components/List';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customer-service" element={<CustomerServiceForm />} />
        <Route path="/list" element={<List />} />

      </Routes>
    </Router>
  );
};

export default App;
