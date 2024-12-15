import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AdminPannel = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Dummy credentials
    const validUsername = 'admin@123';
    const validPassword = 'admin@123';

    if (username === validUsername && password === validPassword) {
      
          navigate("/employeedata");

    } else {
      alert('Invalid username or password');
    }
  };

  return (

    <>
    <Container>
      <form className="login" onSubmit={handleSubmit}>
        <h2>Admin Pannel</h2>
        <p></p>
        <input 
          type="text"
          placeholder="User Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)} />

        <input 
          type="password"
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)} />
        <input type="submit" />
        <div className="links">
         <b> Note:</b>
          <span> This panel is only for admin, normal users cannot access it. </span>
        </div>
      </form> 

      </Container>
      </>
    )
};

export default AdminPannel;
