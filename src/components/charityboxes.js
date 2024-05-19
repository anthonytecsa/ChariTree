import React from 'react';

const CharityBoxes = (props) => {
  return (
    // <div className="rounded-xl overflow-hidden shadow-lg bg-white h-full">
    //   <img className="w-full" alt="Charity" src={props.image} />
    //   <div className="flex flex-col justify-between flex-grow">
    //     <div className="flex flex-col p-4"> {/* not sure if we need this extra wrapping one just yet */}
    //       <p className="font-bold text-xl mb-2">{props.title}</p>
    //       <p className="text-gray-700 text-base">{props.subtitle}</p>
    //       <p className="text-gray-700 text-base mt-3 overflow-hidden overflow-ellipsis line-clamp-3">{props.text}</p> {/* hides any extra text */}
    //     </div>
    //     <button className="bg-pink-logo hover:bg-pink-logo-hover text-white font-bold py-2 px-4 rounded mt-4">
    //       Read More
    //     </button>
    //   </div>
    // </div>

    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white flex flex-col h-full">
      <img className="w-full" alt="Charity" src={props.image} />
      <div className="px-6 py-4 flex flex-col justify-between flex-grow">
        <div> {/* not sure if we need this extra wrapping one just yet */}
          <div className="font-bold text-xl mb-2">{props.title}</div>
          <div className="text-gray-700 text-base">{props.subtitle}</div>
          <p className="text-gray-700 text-base mt-3 overflow-hidden overflow-ellipsis line-clamp-3">{props.text}</p> {/* hides any extra text */}
        </div>
        <button className="bg-pink-logo hover:bg-pink-logo-hover text-white font-bold py-2 px-4 rounded mt-4">
          Read More
        </button>
      </div>
    </div>
  );
};

export default CharityBoxes;
