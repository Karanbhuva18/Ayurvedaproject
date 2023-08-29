import React from 'react';
import './Diseasedesc.css';

const Diseasedesc = ({ diseasedesc }) => {
  if (!diseasedesc || Object.keys(diseasedesc).length === 0) {
    // Handle the case when no data is passed or the object is empty
    return <div>No data available</div>;
  }

  const {
    name,
    desc,
    started,
    Signsof,
    Ayurvedic_Approach,
    img
  } = diseasedesc;

  return (
    <div className='desccontainer'>
      <div className='container'>
        <div className='Diseasetitle'>
          <div className='infoabout'>Information about :-</div>
          <div>{name}</div>
        </div>
        <div className='imgcontainer'>
          <img src={img} alt={name} />
        </div>
        <p className='decription'>{desc}</p>
        <div className='started'>How It Started In Body:</div>
        <div className='sdesc'>{started}</div>

        <div className='started'>Signs of Disease:</div>
        <ul className='listofsing'>
          {Signsof.map((sign, index) => (
            <li key={index}>{sign}</li>
          ))}
        </ul>

        <div className='started'>Solution in Ayurveda</div>
        <ul>
          {Ayurvedic_Approach.map((approach, index) => (
            <li key={index}>{approach}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Diseasedesc;
