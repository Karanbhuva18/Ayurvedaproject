import React, { useState } from 'react';
import './Diseasebar.css'; // Import the custom CSS file
import Disease from './DiseaseList';

const Diseasebar = () => {
  const [diseaseinfo, setDiseaseinfo] = useState(Disease);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(-1);

  const handleCategoryClick = (index) => {
    setSelectedCategoryIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  const handleItemClick = (itemName, event) => {
    console.log(itemName);
    event.stopPropagation();
  };

  return (
    <div className="sidebar">
      <ul className="list-group">
        {diseaseinfo.map((curele, index) => (
          <li
            key={index}
            className="list-group-item"
            onClick={() => handleCategoryClick(index)}
          >
            {curele.category}
            {selectedCategoryIndex === index && (
              <ul className="name-list">
                {curele.name.map((item, idx) => (
                  <li
                    className="list-item"
                    key={idx}
                    onClick={(event) => handleItemClick(item, event)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Diseasebar;
