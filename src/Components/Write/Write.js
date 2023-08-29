import React, { useState, useRef } from "react";
import "./write.css";
import axios from "axios";
const Write = () => {
  const [fontFamily, setFontFamily] = useState("Arial");
  const contentEditableRef = useRef(null);

  const [alignment, setAlignment] = useState("left");
  const [image, setImage] = useState("");
  const fileInputRef = useRef("");
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [category,setCategory]= useState("Yoga");
  const [user, setUser] = useState({
    title: "",
    content: "",
    category:"",
    image:""
  });
  // const handleimg = (e) => {
  //   const file = e.target.files[0];
  //   console.log(file);
  //   setImage(e.target.files[0]);
  // };

  const handleContentChange = () => {
    if (contentEditableRef.current) {
      const newContent = contentEditableRef.current.textContent;
      setContent(newContent);
      setUser((prevUser) => ({ ...prevUser, content: newContent }));
    }
  };

  const handleTitleChange = (event) => {
    const newTitle = event.target.value;
    setTitle(newTitle);
    setUser((prevUser) => ({ ...prevUser, title: newTitle }));
  };

  const handleFileButtonClick = (e) => {
    const selectedFile = e.target.files[0];
    
    if (selectedFile) {
      var reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onload = () => {
        setImage(reader.result);
        setUser((prevUser) => ({ ...prevUser, image: reader.result }));
      };
    }
  };

  const handlePublishClick = async (event) => {
    event.preventDefault();
  
    try {
      // Upload the image to the server and get the image URL
    // console.log(user.image)
    console.log({
      title: user.title,
      blog: user.content,
      category: user.category,
      image: user.image
})

      // Create the blog post with the image URL
      const response = await axios.post('http://localhost:5000/blogs/store', {
      title: user.title,
      blog: user.content,
      category: user.category,
      image: user.image
});
  
      console.log('Blog created:', response.data);
    } catch (error) {
      console.error('Failed to create blog:', error);
    }
  };
  
  

  
  

  const handleBoldClick = () => {
    document.execCommand("bold", false, null);
  };

  const handleItalicClick = () => {
    document.execCommand("italic", false, null);
  };

  const handleUnderlineClick = () => {
    document.execCommand("underline", false, null);
  };
  const handleAlignmentClick = (align) => {
    setAlignment(align);
    document.execCommand("justify" + align, false, null);
  };
  const handleFontFamilyChange = (event) => {
    setFontFamily(event.target.value);
  };
  const handlecategory = (event) =>{
    const newTitle = event.target.value;
    setCategory(newTitle)
    setUser((prevUser) => ({ ...prevUser, category: newTitle }))
  }
  return (
    <>
      <div className="write">
        <div >
          {" "}
          {image ? (
            <img
              className="writeimg"
              src={image}
              alt="Apload image"
            />
          ) : (
            <img
              className="writeimg"
              src="https://media.istockphoto.com/id/1248723171/vector/camera-photo-upload-icon-on-isolated-white-background-eps-10-vector.jpg?s=612x612&w=0&k=20&c=e-OBJ2jbB-W_vfEwNCip4PW4DqhHGXYMtC3K_mzOac0="
              alt="Apload image"
            />
          )}
        </div>

        <form className="writeform">
          <div className="writeFormGroup">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileButtonClick}
              
              className="writeInput"
            />
            <div className="titlelable">Set Title:-</div>
            <input
              type="text"
              placeholder="Title"
              className="writeInput"
              autoFocus={true}
              height={50}
              onChange={handleTitleChange}
            />
            
          </div>
          
          <div class="dropdowncategory">
              <select  onChange={handlecategory}>
                <option value="Yoga">Yoga</option>
                <option value="AyurvedaMedicins">AyurvedaMedicins</option>
                <option value="MindBodyWellness">Mind-Body Wellness</option>
                <option value="Skincare">Skincare</option>
                <option value="AyurvedicTherapies">Ayurvedic Therapies</option>
              </select>
            </div>
          <div className="writeFormGroupIcon">
            <div className="writeBold Icons" onClick={handleBoldClick}>
              <button type="button">
                <i className="fas fa-bold"></i>{" "}
              </button>
            </div>

            <div className="writeItalic Icons" onClick={handleItalicClick}>
              <button type="button">
                <i class="fas fa-italic"></i>
              </button>
            </div>

            <div
              className="writeUnderLine Icons"
              onClick={handleUnderlineClick}
            >
              <button type="button">
                <i class="fa-solid fa-underline"></i>{" "}
              </button>
            </div>

            <div
              className="writeLeft Icons"
              onClick={() => handleAlignmentClick("left")}
            >
              <button type="button">
                <i class="fa-solid fa-align-left"></i>
              </button>
            </div>
            <div
              className="writeCenter Icons"
              onClick={() => handleAlignmentClick("center")}
            >
              <button type="button">
                <i class="fa-solid fa-align-justify"></i>
              </button>
            </div>
            <div
              className="writeRight Icons"
              onClick={() => handleAlignmentClick("right")}
            >
              <button type="button">
                <i class="fa-solid fa-align-right"></i>
              </button>
            </div>

            <div class="dropdown">
              <select value={fontFamily} onChange={handleFontFamilyChange}>
                <option value="Arial">Arial</option>
                <option value="Verdana">Verdana</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Courier New">Courier New</option>
              </select>
            </div>

            <div className="writeLi">
              <i class="fa-solid fa-list"></i>
            </div>
            <div className="writeLinum">
              <i class="fa-solid fa-list-ol"></i>
            </div>
          </div>
          <div className="writeFormGroup">
            <div
              ref={contentEditableRef}
              contentEditable={true}
              placeholder="Tell Your story..."
              className={`writeInput writeText`}
              style={{ textAlign: alignment, fontFamily: fontFamily }}
              onInput={handleContentChange}
            ></div>
          </div>
          <button className="writeSubmit" onClick={handlePublishClick}>
            Publish
          </button>
        </form>
      </div>
    </>
  );
};

export default Write;
