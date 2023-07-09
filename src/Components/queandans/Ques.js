import React, { Fragment } from 'react'
import {FaXmark} from "react-icons/fa6";

import './ques.css';
const Ques = () => {
  
  return (
    <>
        <div className='wraper'>
                <div className='container-sm border border-secondary mt-3 p-0'>
                        <div className='heading  border-bottom w-150'>
                            <div className='close m-3'><FaXmark/></div>
                            <div className='createque text-center mt-3'>Create Question</div>
                        </div>
                        
                            <div className='desc d-flex'>
                                    <div className='profile m-2'><img src='https://toppng.com/uploads/preview/avatar-png-11554021819gij72acuim.png' alt='imga'/></div>
                                    <div className='userName m-2'>Karan</div>
                            </div>
                            <textarea
                              className="writeinput"
                              contentEditable={true}
                              placeholder="Ask your question..."
                              
                            ></textarea>
                      
                       
                        <div className='upload d-flex justify-content-between border-top'>
                          
                            <div className='imgupload mt-2 '><img src='https://pixsector.com/cache/517d8be6/av5c8336583e291842624.png' alt='imgupload'/></div>
                            <button type="button" class="btn btn-info post mt-2">Post</button>
                        </div>
                </div>
        </div> 
    </>
  )
}

export default Ques
