import React, { useState } from 'react'
import './question.css';
import Qmodal from '../QNA/Qmodal'
const Qustion = () => {
  const [showlable,setShowlable]=useState(false)
  function showheandler(){
              setShowlable(true)
  }
  function closelable(){
      setShowlable(false)
}
  return (
          
        <div className='Que-com'>
       
        <img className='quepro' src='dhruhit.jpg'></img>
        <input className='que-fild'  type='text' placeholder='What to you want to ask or share?' 
        onClick={showheandler} ></input>
        <div className='buttoncontainer'>
            <button className='btn1' onClick={showheandler}>Ask</button>
            <button className='btn2'>Answer</button>
            <button className='btn3'>Post</button>
        </div>
        {showlable?
        <Qmodal closelable={closelable}></Qmodal>:''
    }
        </div>
    
  )
}

export default Qustion
