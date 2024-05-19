import React from 'react';
import logo2 from '../assets/logo2.png';
import charitreetext from '../assets/charitree-text.png';
import { UserContext } from '../contexts/UserContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';


const Header = () => {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        // need code to reset user session
        navigate('/login');
    };

    return (
        <div className="h-28 bg-black overflow-hidden"> 
            <div className="flex mt-4">
                <img src={logo2} alt="Charitree Logo" className="flex w-30 h-20 ml-3"/>
                <img src={charitreetext} alt="Charitree Logo" className="flex w-50 h-11 mt-6"/>
                <a className="float-left ml-3 text-gray-200 text-center px-5 py-6 no-underline text-lg hover:bg-gray-200 hover:text-black" href="#home">Home</a>
                <a className="float-left text-gray-200 text-center px-4 py-6 no-underline text-lg hover:bg-gray-200 hover:text-black" href="#contact">Contact</a>
                <a className="float-left text-gray-200 text-center px-4 py-6 no-underline text-lg hover:bg-gray-200 hover:text-black" href="#about">About</a>
                {user ? (
                    <div className="ml-auto flex items-center pr-10">
                        <span className="mr-4 text-lg text-gray-200">Welcome, {user.username}!</span>
                        <button onClick={handleLogout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Logout
                        </button>
                    </div>
                ) : (
                    <nav>
                    <a href="/login" className="mr-4">Login</a>
                    <a href="/signup">Sign Up</a>
                    </nav>
                )}
            </div>
        </div>
    );
};

export default Header;
