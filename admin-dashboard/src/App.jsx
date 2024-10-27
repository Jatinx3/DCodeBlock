// import { Route, Routes } from 'react-router-dom';
// import OverviewPage from './pages/OverviewPage';
// import UsersPage from './pages/UsersPage';
// import Sidebar from './components/Sidebar';
// import LoginPage from './components/Login';


// function App() {
  

//   return (
//     <div className='flex h-screen bg-gray-900 text-gray-100 overflow-hidden'>
//       {/*background*/}
//       <div className='fixed inset-0 -z-10'>
//         <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80'/>
//         <div className='absolute inset-0 backdrop-blur-sm'/>
      
//       </div>

//       {/* <Sidebar/> */}
//       <Routes>
//         <Route path ='/' element={<LoginPage/>}/>
//         <Route path ='/users' element={<UsersPage/>}/>
        
//       </Routes>

//       <Routes>
     
//       </Routes>
//     </div>
//   )
    
  
// }

// export default App;
 


import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/Login';
import AdminDashboard from './pages/AdminDashboard.jsx'
import UserDashboard from './pages/UserDashboard.jsx'

function App() {
  const [userRole, setUserRole] = useState(null);

  const handleLogin = (role) => {
    setUserRole(role);
  };

  const handleLogout = () => {
    setUserRole(null);
  };

  return (
    
      <Routes>
        <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
        <Route
          path="/admin"
          element={userRole === 'admin' ? <AdminDashboard onLogout={handleLogout} /> : <Navigate to="/" />}
        />
        <Route
          path="/user"
          element={userRole === 'user' ? <UserDashboard onLogout={handleLogout} /> : <Navigate to="/" />}
        />
      </Routes>
    
  );
}



export default App;
