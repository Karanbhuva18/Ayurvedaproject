import React from 'react'
import './single.css'
import Sidebar from '../sidebar/Sidebar'
import Singlepost from '../Singlepost/Singlepost'
const Single = () => {
  return (
    <>
        <div className='single'>
            <Singlepost />
            <Sidebar />
        </div> 
    </>
  )
}

export default Single
