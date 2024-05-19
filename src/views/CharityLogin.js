import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo2 from '../assets/logo2.png';
import { UserContext } from '../contexts/UserContext';
import { useContext } from 'react';
import hexBackground  from '../assets/HEX-BACKGROUND.png';


const CharityLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  async function handleSignup(e) {
    e.preventDefault();
    let data;
    const response = await fetch('http://172.20.10.13:8000/custom_auth/login', {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(
        {username: username, password:password}
      )
      })
      if (response.ok) {
        data = await response.json();
        setUser({ username }); // Assume the user's name is part of the user object
      } else {
        console.log("Failed")
      }
    // On successful signup, redirect to the login page or dashboard
    navigate('/charity-dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundImage: `url(${hexBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="flex w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="w-full p-10">
          {/* Logo ontop of signin */}
          <div className="flex justify-center mx-auto">
            <img src={logo2} alt="Charitree Logo" className="w-20 h-15 py-5" />
          </div>
          <h2 className="text-2xl font-bold text-center text-gray-700">Charity Login</h2>
          <form onSubmit={handleSignup}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Charity Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Charity Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none"
                required
              />
            </div>
            <button type="submit" className="w-full bg-pink-logo text-white py-2 px-4 rounded-lg hover:bg-pink-logo-hover">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CharityLogin;
