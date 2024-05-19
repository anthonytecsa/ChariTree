import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CharityContext } from '../contexts/CharityContext';

const CharityBoxes = (props) => {
  const navigate = useNavigate();
  const { setCharity } = useContext(CharityContext);

  const goToCharityDashboard = (event) => {
    event.preventDefault();
    setCharity({ title: props.title });
    navigate('/charity-dashboard');
  };

  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white flex flex-col h-full">
      <div className="w-full h-80 overflow-hidden">
        <img className="w-full h-full object-cover" alt="Charity" src={props.image} />
      </div>
      <div className="px-6 py-4 flex flex-col justify-between flex-grow">
        <div className="font-bold text-xl mb-2">{props.title}</div>
        <div className="text-gray-700 text-base">{props.subtitle}</div>
        <p className="text-gray-700 text-base mt-3 overflow-hidden overflow-ellipsis line-clamp-3">{props.text}</p> {/* hides any extra text */}
        <button onClick={goToCharityDashboard} className="bg-pink-logo hover:bg-pink-logo-hover text-white font-bold py-2 px-4 rounded mt-4">
          Read More
        </button>
      </div>
    </div>
  );
};

export default CharityBoxes;
