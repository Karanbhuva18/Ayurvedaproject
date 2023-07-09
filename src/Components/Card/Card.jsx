import React from 'react'
import './card.css';
const Card = () => {
  return (
    <>
      <div className='Card'>
                    
                    <img src='https://cdn.i-scmp.com/sites/default/files/styles/1200x800/public/d8/images/methode/2020/07/03/2b4cc7fc-b76b-11ea-94a5-08ba74052128_image_hires_153026.jpg?itok=2jUdc2za&v=1593761446' alt='cardimg' className='card_header' />
          
                    <div className='cardinfo'>
                        <div className='card_body'>
                        <span className='tag tag-brown'>Food</span>
                        <h4>Ayurveda Food</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>

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
