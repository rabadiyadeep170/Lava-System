import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AdminPannel from './AdminSite/AdminPannel';
import IndexFile from './Compo/IndexFile';
import EmployeeData from './AdminSite/EmployeeData';
import UserPannel from './UserSite/UserPannel';
import UserPortal from './UserSite/UserPortal';
import SignUpPage from './UserSite/SignUpPage';
import Features from './DropDown/Features';

 function App() {
  return (
    <>

      <Router>

        <Routes>

        <Route path="/" element={<IndexFile />} />
        <Route path="/adminpannel" element={<AdminPannel />} />
        <Route path='/employeedata' element={<EmployeeData />} />

        <Route path='#about' />
        <Route path='/features' element={<Features />} />

        <Route path='/userpannel' element={<UserPannel />} />
        <Route path='/userportal' element={<UserPortal />} />
        <Route path='/SignUpPage' element={<SignUpPage />} />
        </Routes>

      </Router>

    </>
  )
}
export default App;