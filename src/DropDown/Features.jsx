import React from 'react'
import "../DropDown/Style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { CiTimer } from "react-icons/ci";
import { CiVial } from "react-icons/ci";
import { FaChalkboardUser } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";
import { BiSolidCustomize } from "react-icons/bi";
import { LiaCapsulesSolid } from "react-icons/lia";
import { IoMdAnalytics } from "react-icons/io";
import { MdSupportAgent } from "react-icons/md";
import MainHeader from '../Compo/MainHeader/MainHeader';


export default function Features() {
  return (
    <>

    <MainHeader />  

    <section>
      <div className="row">
        <h1 className='h1' style={{top: '20px' , position: 'relative'}}>Our Features</h1>
      </div>

          <Container>
          <div className="row">
      
            <div className="column">
              <div className="card1">
                <div className="icon">
                  <CiTimer />
                </div>
                <h3>Scalability</h3>
                <p>
                The ability to grow and handle increasing amounts of work or data without compromising performance.
                </p>
              </div>
            </div>
            
            <div className="column">
              <div className="card1">
                <div className="icon">
                <CiVial />
                </div>
                <h3>High Availability
                </h3>
                <p>
                Designed to be up and running with minimal downtime, ensuring business continuity even during system failures.
                </p>
              </div>
        
            </div>
            <div className="column">
              <div className="card1">
                <div className="icon">
                <MdOutlineSecurity />
                </div>
                <h3>Security</h3>
                <p>
                Robust security features, including data encryption, user authentication, and compliance with industry standards to protect sensitive information.
                </p>
              </div>
        
            </div>
          </div>

          <br /><br />
      <div className="row">
            
            <div className="column">
              <div className="card1">
                <div className="icon">
                <FaChalkboardUser />
                </div>
                <h3> User-Friendly Interface</h3>
                <p>
                Intuitive and easy-to-use interfaces that allow users to interact with the system without requiring extensive training.
                </p>
              </div>
            </div>
            
            <div className="column">
              <div className="card1">
                <div className="icon">
                <BiSolidCustomize />
                </div>
                <h3>Customizability
                </h3>
                <p>
                The system may offer a high level of customization to fit specific business needs, including customizable workflows, dashboards, and reports.
                </p>
              </div>

            </div>
            <div className="column">
              <div className="card1">
                <div className="icon">
                <LiaCapsulesSolid />
                </div>
                <h3>Integration Capabilities</h3>
                <p>
                The ability to integrate seamlessly with other software systems, databases, or APIs, allowing for smooth data exchange and operational efficiency.
                </p>
              </div>

            </div>
      </div>
          <br /><br />
          <div className="row" style={{marginLeft: '10%' , position: 'absolute'}}>
   
          <div className="column">
            <div className="card1">
              <div className="icon">
              <IoMdAnalytics />
              </div>
              <h3>Real-Time Analytics</h3>
              <p>
              Features that enable real-time data processing and analytics, providing users with up-to-the-minute insights.
              </p>
            </div>
          </div>
          
          <div className="column">
            <div className="card1">
              <div className="icon">
              <MdSupportAgent />
              </div>
              <h3>Support and Maintenance
              </h3>
              <p>
              Regular updates, customer support, and maintenance services to ensure the system remains up-to-date and functional.
              </p>
            </div>

          </div>
        </div>
      </Container>
    </section>
   

    </>
  )
}
