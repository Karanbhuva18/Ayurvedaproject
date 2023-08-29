import React from 'react'
import Header from './Header'
import Diseasebar from './Diseasebar'
// import Diseasedesc from './Diseasedesc'
import './Diseaseinfo.css';
const Diseaseinfo = () => {
  return (
    <>
      <Header/>
      <div className='maincontaint'>
        <Diseasebar />
        {/* <Diseasedesc /> */}
      </div>
    </>
  )
}

export default Diseaseinfo
