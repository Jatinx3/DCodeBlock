import React from 'react';
import Sidebar from '../components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import OverviewPage from '../components/admin/OverviewPage';
import UsersPage from '../components/admin/UsersPage';


const AdminDashboard = ({ onLogout }) => (
  // <div className="p-4">
  //   <h1 className="text-3xl font-bold">Admin Dashboard</h1>
  //   <p>Welcome, Admin!</p>
  //   <button
  //     onClick={onLogout}
  //     className="px-4 py-2 mt-4 font-semibold text-white bg-red-500 rounded hover:bg-red-600"
  //   >
  //     Logout
  //   </button>
  // </div>
    <div className='flex h-screen bg-gray-900 text-gray-100 overflow-hidden'>
      {/*background*/}
      <div className='fixed inset-0 -z-10'>
        <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80'/>
        <div className='absolute inset-0 backdrop-blur-sm'/>
      
      </div>

       <Sidebar/> 
       <Routes>
        <Route path ='/' element={<OverviewPage/>}/>
        <Route path ='/users' element={<UsersPage/>}/>
        
      </Routes>

      <Routes>
     
      </Routes> 
    </div>




);

export default AdminDashboard;
