// src/components/Content.js
import Table from 'react-bootstrap/Table';
import './Content.css';

const Content = () => {
  let x = localStorage.getItem("passWord")
  var hide_password = ''

  for(let i = 1; i <= x.length; i++){
    hide_password = hide_password + '*';
  }


  return (
    <main className="content">
      <h2>Welcome to the Portal</h2>
      <p>This portat use only for Data read it can't be edit,delete.</p>
      <br />
      <h3>Personal Info</h3>
  
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Number</th>
          <th>Age</th>
          <th>State</th>
          <th>Email</th>
          <th>password</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>{localStorage.getItem("Name")}</td>
          <td>{localStorage.getItem("mobileNumbwer")}</td>
          <td>{localStorage.getItem("Age")}</td>
          <td>{localStorage.getItem("State")}</td>
          <td>{localStorage.getItem("Email")}</td>
          <td>{hide_password}</td>
  
        </tr>
      </tbody>
    </Table>
    <br />
    <h3>Skils Info</h3>

      <div className="dashboard-cards">
        <div className="card">
          <h3>Front-End</h3>
          <br />
          <p>A Front-End Developer is someone who creates websites and web applications. The difference between Front-End and Back-End is that Front-End refers to how a web page looks, while back-end refers to</p>
        </div>
        <div className="card">
          <h3>Back-End</h3>
          <br />
          <p>Back-end developers are the experts who build and maintain the mechanisms that process data and perform actions on websites. Unlike front-end developers, who control everything you can see on a website.</p>
        </div>
        
        
      </div>
    </main>
  );
};

export default Content;
