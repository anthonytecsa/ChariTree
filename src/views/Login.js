import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import hexBackground  from '../assets/HEX-BACKGROUND.png';
import { UserContext } from '../contexts/UserContext';
import { useContext } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);


  async function handleLogin(e) {
    e.preventDefault();
    let data;
    const response = await fetch('http://172.20.10.2:8000/custom_auth/login', {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(
        {username: username, password:password}
      )
      })
      if (response.ok) {
        data = await response.json();
        setUser({ username }); // Assume the user's name is part of the user object
        navigate('/dashboard');
      } else {
        console.log("Failed")
      }
  };

  const goToSignup = (event) => {
    event.preventDefault();
    navigate('/signup');
  };

  const goToCharityLogin = (event) => {
    event.preventDefault();
    navigate('/charitylogin');
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundImage: `url(${hexBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="flex w-full max-w-7xl bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Logo */}
            <div className="w-1/2 flex items-center justify-center bg-gray-800">
                <img src={logo1} alt="Charitree Logo" className="w-100 h-80" />
            </div>
            <div className="w-1/2 rounded-xl p-10">
                {/* Logo ontop of Login */}
                <div className="flex justify-center mx-auto">
                <img src={logo2} alt="Charitree Logo" className="w-20 h-15 py-5" />
                </div>
                <h2 className="text-2xl font-bold text-center text-gray-700">Welcome Back!</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Username
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
                        Password
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
                {/* signup link and charity and admin buttons */}
                <div className="flex items-center justify-between mt-4">
                    <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                    <button onClick={goToSignup} className="text-sm text-gray-500 uppercase font-semibold dark:text-gray-400 hover:underline">
                    or sign up
                    </button>
                    <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                </div>

                {/* charity and administrator buttons */}
                <div className="flex gap-4">
                    <button type="submit" className="w-1/2 bg-pink-logo text-white h-20 mt-6 rounded-lg hover:bg-pink-logo-hover">
                        Administrator
                    </button>
                    <button onClick={goToCharityLogin} className="w-1/2 bg-pink-logo text-white h-20 mt-6 rounded-lg hover:bg-pink-logo-hover">
                        Charity Login
                    </button>
                </div>

            </div>
        </div>
    </div>
  );
};

export default Login;
