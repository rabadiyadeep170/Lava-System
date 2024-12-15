// src/components/Sidebar.js

import React from 'react';
import { FaHome, FaChartLine, FaCog, FaSignOutAlt } from 'react-icons/fa';
import './Sidebar.css';
import { MdDelete } from "react-icons/md";
import { useNavigate } from 'react-router-dom';


const Sidebar = () => {

  const navigate = useNavigate();

  function delete_session()
  {
        localStorage.clear("Name")
        localStorage.clear("Age")
        localStorage.clear("State")
        localStorage.clear("Email")
        localStorage.clear("mobileNumber")
        localStorage.clear("passWord")
        navigate("/")
    
  }
  function logout_session()
  {
      navigate("/")
  }

  return (
    <aside className="sidebar">
      <nav className="nav-menu">
        <ul>
          <li>
            <FaHome />
            <span>Home</span>
          </li>
          <li>
            <FaChartLine />
            <span>Dashboard</span>
          </li>
          <li>
            <FaCog />
            <span>Settings</span>
          </li>
          <li>
            <FaSignOutAlt />
            <span onClick={logout_session}>Logout</span>
          </li>
          <li>
          <MdDelete />
          <span onDoubleClick={delete_session}>Delete Account</span>

          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
