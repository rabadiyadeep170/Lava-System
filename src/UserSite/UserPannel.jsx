
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const UserPannel = () => {
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if(number === localStorage.getItem("phoneNumber") && password === localStorage.getItem("passWord"))
    {
        navigate("/userportal");
    }
    else
    {
      alert("info is invalid , try again....")
    }

  };

  return (

    <>
    <Container>
      <form className="login" onSubmit={handleSubmit}>
        <h2>User Pannel</h2>
        <p></p>
        <input 
          type="number"
          placeholder="Phone No."
          value={number}
          onChange={(e) => setNumber(e.target.value)} />

        <input 
          type="password"
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)} />
        <input type="submit" />
        <li className="signup">
          <strong>
            <NavLink to='/SignUpPage' activeStyle style={{fontSize: '18px' ,
               fontFamily: 'sans-serif' , marginLeft: '80%', 
               lineHeight: '1.5rem'}}>Sign Up</NavLink>
            </strong>
            
         </li>
       <br />
        <div className="links">
         <b> Note:</b>
          <span> This panel use are both user and admin,Thank You Everyone. </span>
        </div>
      </form> 

      </Container>
      </>
    )
};

export default UserPannel;
