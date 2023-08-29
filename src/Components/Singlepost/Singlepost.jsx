import React from 'react'
import './singlePost.css'
const Singlepost = ({ data, idx }) => {
  console.log(data,idx)

  const specificData = data[idx];
  return (
    <div className='singlePost'>
            <div className="singlePostWrapper">
                    <img src={specificData.image}   alt='img' className="singlePostImg" />
                    <div className="singlePostTitle">{specificData.title}  
                    <div className='singlePostEdit'>
                    <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                    <i className='singlePostIcon far fa-trash-alt'></i>
                    </div>
                    </div>
                    <div className="singlePostInfo">
                        <span className='singlePostAuthor'>Author:    <b>Safak</b></span>
                        <span className='singlePostDate'>1 hour ago</span>
                    </div>
                    <p className='singlePostDesc'>
                        {specificData.blog}
                    </p>
                    
            </div>
    </div>
  )
}

export default Singlepost
