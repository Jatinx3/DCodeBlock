import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

const LoginPage = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState('');
  
    const handleLogin = async () => {
      try {
     
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
  
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        const userData = userDoc.data();
  
        if (userData?.role === 'admin') {
          onLogin('admin');
          navigate('/admin');
        } else if (userData?.role === 'user') {
          onLogin('user');
          navigate('/user');
        } else {
          setError('User role is not defined.');
        }
      } catch (error) {
        setError('Failed to login. Please check your email and password.');
        console.error('Login error:', error);
      }
    };
  
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <div className="p-8 bg-gray-800 rounded-lg shadow-lg w-80">
          <h2 className="mb-6 text-3xl font-bold text-center text-gray-100">Login</h2>
          {error && <p className="mb-4 text-sm text-red-500">{error}</p>}
          <div className="relative mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 text-white placeholder-gray-400 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-indigo-400"
            />
            <label className="absolute left-4 -top-3 px-1 bg-gray-800 text-gray-400 text-sm transform -translate-y-1/2">
              Email
            </label>
          </div>
          <div className="relative mb-6">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 text-white placeholder-gray-400 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-indigo-400"
            />
            <label className="absolute left-4 -top-3 px-1 bg-gray-800 text-gray-400 text-sm transform -translate-y-1/2">
              Password
            </label>
          </div>
          <button
            onClick={handleLogin}
            className="w-full py-3 font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-all"
          >
            Login
          </button>
        </div>
      </div>
    );
  };
  
  export default LoginPage;