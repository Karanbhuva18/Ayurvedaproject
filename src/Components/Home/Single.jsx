import React from 'react'
import './single.css'
import Sidebar from '../sidebar/Sidebar'
import Singlepost from '../Singlepost/Singlepost'
import { useLocation } from 'react-router-dom'
const Single = (props) => {
  const location = useLocation();
  console.log(props,"props")
  console.log(location,"location")
  const data = location.state?.blogs;
  const idx = location.state?.idx;
  return (
    <>
        <div className='single'>
            <Singlepost data={data} idx={idx} />
            <Sidebar />
        </div> 
    </>
  )
}

export default Single
