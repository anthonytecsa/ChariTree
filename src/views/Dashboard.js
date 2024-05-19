import React, { useEffect, useState } from 'react';
import CharityBoxCarousel from '../components/CharityBoxCarousel';

const Dashboard = () => {
  const [charities, setCharities] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('http://172.20.10.13:8000/charity_info/get_all_charities');
      const data = await response.json();
      console.log('Fetched data:', data);
      const formattedData = data.charities.map(charity => ({
        image: charity.img_link,
        title: charity.username,
        subtitle: charity.subtitle,
        text: charity.text_desc,
        color: 'blue'  // Add any necessary color logic here if needed
      }));
      setCharities(formattedData);
      console.log('Formatted data:', formattedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []); 
  return (
    <div className='bg-gray-900 min-h-screen flex items-center justify-center'>
        <CharityBoxCarousel items={charities} itemsToShow={3} /> 
    </div>
  );
};

export default Dashboard;
