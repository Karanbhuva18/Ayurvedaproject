import React from 'react'
import './card.css';
// import { NavLink } from 'react-router-dom';
const Card = ({img,title,category,blog}) => {
  // console.log(blogs)
  return (
    <>
      
       
              
                <div className='Card'>
                    
                <img src={img} alt='cardimg' className='card_header' />
      
                <div className='cardinfo'>
                    <div className='card_body'>
                    <span className='tag tag-brown'>{category}</span>
                    <h4>{title}</h4>
                    <p className='contentdata'>{blog}</p>

                    </div>
                    
                    <div className='card_footer'>
                    <div className='user'>
                        <img src='https://st2.depositphotos.com/1441511/9157/i/600/depositphotos_91576128-stock-photo-business-woman-holding-a-tablet.jpg' alt='smallimg'/>
                        <div className='user_info'>
                            <h5>Jony Doe</h5>
                            <small>yesterday</small>
                        </div>
                    </div>
                </div>
                </div>
                
  </div>
              
               
     
    </>
  )
}

export default Card
