import React, { Fragment, useRef ,useState} from 'react'
import {FaXmark} from "react-icons/fa6";

import './ques.css';
const Ques = () => {
  const [image,setImage] = useState("");
  // const [profile,setProfile] = useState("");

  const inputRef = useRef(null);
  const handleImageClick =() =>{
    inputRef.current.click();
  }
  const handleImagechange = (event) =>{
      const imgfile = event.target.files[0];
      setImage(imgfile);
  }
  
  return (
    <>
        <div className='wraper'>
                <div className='container-sm    p-0'>
                        <div className='heading  border-bottom w-150'>
                            <div className='close m-3'><FaXmark/></div>
                            <div className='createque text-center mt-3'>Create Question</div>
                        </div>
                        
                            <div className='desc d-flex'>
                                    <div className='profile m-2' ><img src='https://toppng.com/uploads/preview/avatar-png-11554021819gij72acuim.png' alt='imga'/></div>
                                    <div className='userName m-2'>Karan</div>
                            </div>

                            <div className='imagesection container-fluid	'>
                              {image ? <img  src={URL.createObjectURL(image)} class="img-fluid" alt="Responsive"/>:<img  src="https://buzzcrawl.in/wp-content/uploads/2014/10/default-img.gif" class="img-fluid" alt="Responsive"/>  }
                              </div>
                            
                            <textarea
                              className="writeinput"
                              contentEditable={true}
                              placeholder="Ask your question..."
                              style={{height:"150px"}}
                            ></textarea>
                      
                       
                        <div className='upload d-flex justify-content-between border-top'>
                          
                            <div className='imgupload mt-2 ' onClick={handleImageClick} htmlFor='fileInput'><img src='https://pixsector.com/cache/517d8be6/av5c8336583e291842624.png' alt='imgupload'/></div>
                            <button type="button" class="btn btn-info post mt-3">Post</button>
                        </div>
                        <input type='file' style={{display:"none"}} onChange={handleImagechange} ref={inputRef}/>
                </div>
        </div> 
    </>
  )
}

export default Ques
