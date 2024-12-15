
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "./SignUpPage.css"

const SignUpPage = () => {
  const [name , setName] = useState('');
  const [age , setAge] = useState('');
  const [state , setState] = useState('');
  const [email , setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if(number.length === 10)
    {   
        if(password.length >= 6)
        {  
            localStorage.setItem("Name" , name);
            localStorage.setItem("phoneNumber" , number)
            localStorage.setItem("Age" , age)
            localStorage.setItem("State" , state)
            localStorage.setItem("Email" , email)
            localStorage.setItem("passWord" , password)

            alert("Data Entry Successfully")

            navigate("/userpannel")
        }else{

            alert("Password set Properly")

        }
    }
    else{
        alert("Invalid Number , try again....")
    }

  };

  return (

    <>
    <Container>
      <form className="login" onSubmit={handleSubmit}>
        <h2>Create Your Account</h2>
        <p></p>

        <input 
          type="number"
          placeholder="Phone No."
          value={number}
          onChange={(e) => setNumber(e.target.value)} />

        <input 
          type="text"
          placeholder="Name."
          value={name}
          onChange={(e) => setName(e.target.value)} />

          <input 
          type="number"
          placeholder="Age."
          value={age}
          onChange={(e) => setAge(e.target.value)} />

          <input 
          type="text"
          placeholder="State."
          value={state}
          onChange={(e) => setState(e.target.value)} />

          <input 
          type="email"
          placeholder="Email."
          value={email}
          onChange={(e) => setEmail(e.target.value)} />

          <input 
          type="password"
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)} />

        <input type="submit" />
        <div className="links">
         <b> Note:</b>
          <span>  Hello Welcome New User You can fill all Details</span>
        </div>
      </form> 

      </Container>
      </>
    )
};

export default SignUpPage;
