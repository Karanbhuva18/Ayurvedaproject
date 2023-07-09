import React, { useState } from 'react';
import './write.css';


const Write = () => {
  // const [isBold, setIsBold] = useState(false);
  // const [isItalic, setIsItalic] = useState(false);
  // const [isUnderline, setIsUnderline] = useState(false);
  const [fontFamily, setFontFamily] = useState('Arial')
  const [alignment, setAlignment] = useState('left');
  const handleBoldClick = () => {
    document.execCommand('bold', false, null);
  };

  const handleItalicClick = () => {
    document.execCommand('italic', false, null);
  };

  const handleUnderlineClick = () => {
    document.execCommand('underline', false, null);
  }
  const handleAlignmentClick = (align) => {
    setAlignment(align);
    document.execCommand('justify' + align, false, null);
  };
  const handleFontFamilyChange = (event) => {
    setFontFamily(event.target.value);
  };
  return (
    <>
      <div className='write'>
           <img src='https://www.humnutrition.com/blog/wp-content/uploads/2022/05/ayurveda-diet-1-jpg.webp' alt='writingimg' className='writeimg'/>
            <form className='writeform'>
                <div className='writeFormGroup'>
                    <label htmlFor='fileInput'>
                        <i className='writeIcon fas fa-plus'></i>
                    </label>
                    <input type='file' id='fileInput' style={{display:"none"}} className='writeInput' />
                    <input type='text' placeholder='Title' className='writeInput' autoFocus={true} height={50}/>
                </div>
                <div className='writeFormGroupIcon'>
                           
                         

                            <div className='writeBold Icons'  onClick={handleBoldClick}>
                                   <button type='button'><i className='fas fa-bold'></i> </button>   
                            </div>

                            <div className='writeItalic Icons' onClick={handleItalicClick}>
                              <button type='button'><i class="fas fa-italic"></i></button>
                            </div>

                            <div className='writeUnderLine Icons' onClick={handleUnderlineClick}>
                              <button type='button'><i class="fa-solid fa-underline"></i> </button>
                            </div>
                         
                            
                            <div className='writeLeft Icons' onClick={() => handleAlignmentClick('left')}>
                              <button type='button'><i class="fa-solid fa-align-left"></i></button></div>
                            <div className='writeCenter Icons' onClick={() => handleAlignmentClick('center')}><button type='button'><i class="fa-solid fa-align-justify"></i></button></div>
                            <div className='writeRight Icons' onClick={() => handleAlignmentClick('right')}>
                              <button type='button'><i class="fa-solid fa-align-right"></i></button></div>

                            
                            <div class="dropdown">
                            
                              <select value={fontFamily} onChange={handleFontFamilyChange}>
                              <option value="Arial">Arial</option>
                              <option value="Verdana">Verdana</option>
                              <option value="Times New Roman">Times New Roman</option>
                              <option value="Courier New">Courier New</option>
                              </select>
                            </div>

                            <div className='writeLi'><i class="fa-solid fa-list"></i></div>
                            <div className='writeLinum'><i class="fa-solid fa-list-ol"></i></div>
                            

                </div>
                <div className='writeFormGroup'>
                        <div contentEditable={true} placeholder='Tell Your story...' type='text' className={`writeInput writeText    ` } style={{ textAlign: alignment , fontFamily: fontFamily }}></div>
                </div>
                <button className='writeSubmit' >Publish</button>
            </form>
            
      </div>
    </>
  )
}

export default Write
