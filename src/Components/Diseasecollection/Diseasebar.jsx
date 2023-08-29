import React, { useState, useEffect } from 'react';
import './Diseasebar.css';
import Disease from './DiseaseList';
import Diseasedesc from './Diseasedesc';
import Diseaseinfos from './Diseaseinfojson';

const Diseasebar = () => {
  const [diseasedesc, setDiseasedesc] = useState({});
  const [diseaseinfo, setDiseaseinfo] = useState(Disease);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(-1);
  const [items,setItems] = useState()
  useEffect(() => {
    for(let i =0 ;i<Diseaseinfos.length;i++)
    {
        if(items === Diseaseinfos[i].name )
        {
          setDiseasedesc(Diseaseinfos[i]);
        }
        
    }
    
  });

  const handleCategoryClick = (index) => {
    setSelectedCategoryIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  const handleItemClick = (itemName, event) => {
    setItems(itemName)
    console.log(items);
    console.log(diseasedesc)
    event.stopPropagation();
  };

  return (
    <>
      <div className='maindisinfo'>
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
        <Diseasedesc diseasedesc={diseasedesc} />
      </div>
    </>
  );
};

export default Diseasebar;
