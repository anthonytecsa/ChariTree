import React from 'react';
import CharityBoxes from '../components/charityboxes';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    image: 'https://via.placeholder.com/150',
    title: 'Charity One',
    subtitle: 'Helping the Homeless',
    text: 'Providing shelter and food for the homeless.',
    color: 'blue'
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Charity Two',
    subtitle: 'Education for All',
    text: 'Supporting education for underprivileged children. Supporting education for underprivileged children. Supporting education for underprivileged children.',
    color: 'blue'
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Charity Three',
    subtitle: 'Healthcare Support',
    text: 'Offering medical assistance to those in need.',
    color: 'blue'
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Charity Four',
    subtitle: 'Education for All',
    text: 'Supporting education for underprivileged children. Supporting education for underprivileged children. Supporting education for underprivileged children.',
    color: 'blue'
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Charity Five',
    subtitle: 'Healthcare Support',
    text: 'Offering medical assistance to those in need.',
    color: 'blue'
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Charity Six',
    subtitle: 'Healthcare Support',
    text: 'Offering medical assistance to those in need.',
    color: 'blue'
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Charity Seven',
    subtitle: 'Education for All',
    text: 'Supporting education for underprivileged children. Supporting education for underprivileged children. Supporting education for underprivileged children.',
    color: 'blue'
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Charity Eight',
    subtitle: 'Healthcare Support',
    text: 'Offering medical assistance to those in need.',
    color: 'blue'
  },
];

const Dashboard = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3, // show 3 at once
    slidesToScroll: 3 // scroll past 3
  };

  return (
    // <div className='bg-gray-900'>
    //   <div className="mt-20">
    //     <Slider {... settings}>
    //       {data.map((item) => (
    //         // <div className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4" key={index}>
    //         <div key={item.title} className="bg-white">
    //           <img className="" alt="Charity" src={item.image} />
    //           <div className="">
    //               <p className="">{item.title}</p>
    //               <p className="">{item.subtitle}</p>
    //               <p className="">{item.text}</p>
    //           </div>
    //           <button className="">
    //             Read More
    //           </button>
    //         </div>
    //       ))}
    //     </Slider>
    //   </div>
    // </div>
    <div className='bg-gray-900 h-full w-full m-0'>
      <div className="container mx-auto px-8 py-8">
        <div className="flex flex-wrap">
          {data.map((item, index) => (
            <div className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4" key={index}>
              <CharityBoxes
                image={item.image}
                title={item.title}
                subtitle={item.subtitle}
                text={item.text}
                color={item.color}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
