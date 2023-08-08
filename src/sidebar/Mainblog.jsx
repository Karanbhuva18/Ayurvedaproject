import React from 'react'
import Blog from './Blog'
import Sideb from './Sideb'
const Mainblog = () => {
  return (
    <>
      <div className="d-flex justify-content-around blogsecction">
        <Blog></Blog>
       <Sideb/>
      </div> 
    </>
  )
}

export default Mainblog
