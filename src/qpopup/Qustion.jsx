import React, { useState } from 'react'
import './question.css';
import Qmodal from '../QNA/Qmodal'
import Mediasocial from './Mediasocial';
const Qustion = () => {

  const [showlable,setShowlable]=useState(false)
  function showheandler(){
              setShowlable(true)
  }
  function closelable(){
      setShowlable(false)
}

  return (
        <>  
        <div className='Que-com'>
          <img className='quepro' src='dhruhit.jpg'/>
          <input className='que-fild'  type='text' placeholder='What to you want to ask or share?' 
          onClick={showheandler} ></input>
          <div className='buttoncontainer'>
              <button className='b1' onClick={showheandler}>Ask</button>
              <button className='b2'>Answer</button>
              <button className='b3'>Post</button>
          </div>
              {showlable?
              <Qmodal closelable={closelable}></Qmodal>:''
              }
              
        </div>
        {
          Mediasocial.map((value)=>{
                  return (
                                      <div className='media'>

                  <div className='name'>

                        <div className='top'>
                            <img className='mediaimg' src='dhruhit.jpg'/>

                                  <div className='userinfo'>

                                  <div className='info'>
                                <span className='username'>{value.name}</span>
                                <span className='follow'>follow</span>
                                </div>
                              
                                <div className='date'>{value.date}</div>
                                </div>

                              
                                    </div>
                                      <div className='review'>
                                      <h5 className='qustion'>{value.question} </h5>
                                      {value.answer}
                                      </div>

                      <img className='imga1' src={value.img}/>
                      <div className='response'>
                      <i class="fa-regular fa-comment"><span className='comment'>49</span></i>
                      <i class="fa-solid fa-share-nodes"><span className='share'>80</span></i>
                      <i class="fa-regular fa-heart"></i>   
                      </div>               
                  </div>          
                                 </div>
                  );
          })
        };
       
        
        </>
  )
}

export default Qustion