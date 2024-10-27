// src/pages/UserDashboard.js
import React from 'react';

const UserDashboard = ({ onLogout }) => (
  <div className="p-4">
    <h1 className="text-3xl font-bold">User Dashboard</h1>
    <p>Welcome, User!</p>
    <button
      onClick={onLogout}
      className="px-4 py-2 mt-4 font-semibold text-white bg-red-500 rounded hover:bg-red-600"
    >
      Logout
    </button>
  </div>
);

export default UserDashboard;
