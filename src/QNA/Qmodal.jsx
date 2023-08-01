import React, { useState, useRef } from "react";
import { FaXmark } from "react-icons/fa6";


const Qmodal = ({ closelable }) => {
const inputref = useRef(null);
const [image,setImage] = useState("");


const handleImageClick = () =>{
      inputref.current.click();
}
const  hadleImagechange= (event) =>{
      const file = event.target.files[0]; 
      console.log(file);
      setImage(event.target.files[0]);
}
return (
    <>
            <div className="m_wraper"></div>
      <div className="Ans_container">
        <div className="had">Ask freely</div>
        <div className="close m-3" onClick={closelable}>
          <FaXmark />
        </div>
        <hr></hr>

        <div className="imgcontainer">
          <div onClick={handleImageClick}>

            
            { image ? (<img
              className="uploadimg"
              src={URL.createObjectURL(image)}
              alt="Apload image"
            />):
            (<img
              className="uploadimg"
              src="uploadimage.jpg"
              alt="Apload image"
            />)}

            <input type="file" ref={inputref} 
            onChange={hadleImagechange}
            style={{ display: "none" }}/>
            
          </div>
        </div>
        <hr></hr>
                  <textarea class="que_content" placeholder="Enter you qustion here.."></textarea>
      <div className="cancle_submit">

      <button className="cancle" onClick={closelable}>cancle</button>
    <button className="submit">submit</button>
     
      </div>
      </div>
    </>
  );
};

export default Qmodal;
