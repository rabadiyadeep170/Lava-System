import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

export default function EmployeeData() {

  const [data , setData] = useState([]);

      useEffect(()=>{
        Api_fetch_employee_data()
      },[]);


    function Api_fetch_employee_data()
    {
        fetch("https://microsoftedge.github.io/Demos/json-dummy-data/5MB.json")
        .then((res) => {
          return res.json();
        })
        .then((res) => {
            setData(res);
        })
    }

  return (
  <>
  <Container style={{marginTop: "50px"}}>
  <Table striped bordered hover>
      <thead>
        <tr>
          <th colSpan={5} style={{textAlign: 'center', fontSize: '30px' , color: 'red'}}>Employee Data</th>
        </tr>
        <tr>
          <th>name</th>
          <th>language</th>
          <th> id</th>
          <th>bio</th>
          <th>version</th>
        
        </tr>
      </thead>
      <tbody>
        {
            data.map((val)=>{
              return(
               <tr>
                <td>{val.name}</td>
                <td>{val.language}</td>
                <td>{val.id}</td>
                <td>{val.bio}</td>
                <td>{val.version}</td>
               </tr>
              )
            })
        }
      </tbody>
    </Table>
    </Container>
  </>
  )
}
