import React, { useEffect, useState } from 'react';
import './Homepage.css';

const Homepage = () => {
  // const images = [
  //   "https://ayurmantra.com/wp-content/uploads/2012/01/kerala-ayurveda.jpg",
  //   "https://www.10wallpaper.com/wallpaper/1920x1200/1112/nature_landscape-Beautiful_natural_scenery_desktop_wallpaper_1920x1200.jpg",
  //   "https://images.unsplash.com/photo-1627728724901-e79f35800820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
  // ];

  // const [index, setIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     handleChange();
  //   }, 2000);
  //   return () => clearInterval(interval);
  // });

  // const handleChange = () => {
  //   setIndex((prevIndex) => (prevIndex + 1) % images.length);
  // };

  return (
    <>
    <div className='header_container'>
          <img src="img/Ayurvedaimghome.jpg" alt='imgheader'/>
          <div className='headerinfo'>
          <div className='heading'>start your Ayurveda journy with us.</div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima quia, iusto culpa veritatis voluptatem maiores, laborum, a voluptates vel consectetur ipsum fugit hic necessitatibus commodi sequi error ullam architecto repudiandae?</p>
          <button>Read More</button>
          </div>
          
    </div>
    <div className='messageboard'>
        <div className='messtitle'>
              <div className='mesheading'>Unlock the secrets to living <br/> well with ayurveda </div>
              <p>Posuere sodales platea elit libero tempus penatibus tellus fermentum aliquet<br/> elementum. Montes tristique rutrum ornare vel turpis maecenas lacus senectus.<br/> Mi interdum hendrerit enim platea si.</p>
        </div>
    </div>
    
    <div className='features'>
      <div className='blogheading'>Blogs</div>
        <div className='blogs_container'>
                  <div className='blog_cards'>
                      <div className='imagofblog'>
                          <img src='https://gramdindia.com/wp-content/uploads/2022/08/ayurveda1-1.jpg' alt='blogimag'/>
                      </div>
                      <div className='bloginfo'>
                        <h3>What is ayurveda</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta iusto esse quo facere ullam, ex accusantium excepturi iste! Nobis odio vel veniam nulla ratione quos explicabo hic molestias repellendus similique!</p>
                      <button>ReadMore</button>
                      </div>
                      
                  </div>
                
                  <div className='blog_cards'>
                      <div className='imagofblog'>
                          <img src='https://t3.ftcdn.net/jpg/03/21/56/58/360_F_321565851_tbutpMl8sIKpUYgLHWDru1LJIfswmZfW.jpg' alt='blogimag'/>
                      </div>
                      <div className='bloginfo'>
                        <h3>What is ayurveda</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta iusto esse quo facere ullam, ex accusantium excepturi iste! Nobis odio vel veniam nulla ratione quos explicabo hic molestias repellendus similique!</p>
                      <button>ReadMore</button>
                      </div>
                      
                  </div>
                  <div className='blog_cards'>
                      <div className='imagofblog'>
                          <img src='https://media.istockphoto.com/id/855014602/photo/turmeric-powder-turmeric-in-mortar-grinder-drugs-and-ingredient-herbs-on-wooden-background.jpg?s=612x612&w=0&k=20&c=LOJOCwVBgl96mq7bx6FoCIN3WHO4N1QoBgYWX-7ZlFE=' alt='blogimag'/>
                      </div>
                      <div className='bloginfo'>
                          <h3>What is ayurveda</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta iusto esse quo facere ullam, ex accusantium excepturi iste! Nobis odio vel veniam nulla ratione quos explicabo hic molestias repellendus similique!</p>
                        <button>ReadMore</button>
                      </div>
                      
                  </div>
                  
                  
        </div>

        <div className='queheading'><div className='quesheading'>We Can solve Your Question Also</div></div>
        
        <div className='quecontainer'>
         
              <div className='questioncard'>
                        <div className='ques'>What is Ayurveda?</div>
                        <div className='ans'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime minima saepe quod modi fugit voluptatibus vero sapiente incidunt magnam? Sunt vitae doloribus nesciunt sapiente hic alias nisi id cum animi.Lorem ipsum dolor sit amet consectetur, adipisicing elit.</div>
                        <div className='quesdev'><span><i className="fa-regular fa-user"></i></span><span className='username'>By:- Elon Musk</span>
                        <span><button>Read full Ans</button></span></div>
              </div>
              <div className='questioncard'>
                        <div className='ques'>What is Ayurveda?</div>
                        <div className='ans'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime minima saepe quod modi fugit voluptatibus vero sapiente incidunt magnam? Sunt vitae doloribus nesciunt sapiente hic alias nisi id cum animi.Lorem ipsum dolor sit amet consectetur, adipisicing elit.</div>
                        <div className='quesdev'><span><i className="fa-regular fa-user"></i></span>   <span className='username'> By.:- Elon Musk</span>
                        <span><button>Read full Ans</button></span>
                        </div>
              </div>
              <div className='questioncard'>
                        <div className='ques'>What is Ayurveda?</div>
                        <div className='ans'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime minima saepe quod modi fugit voluptatibus vero sapiente incidunt magnam? Sunt vitae doloribus nesciunt sapiente hic alias nisi id cum animi.Lorem ipsum dolor sit amet consectetur, adipisicing elit.</div>
                        <div className='quesdev'><span><i className="fa-regular fa-user"></i></span> <span className='username'>  By:-Elon Musk</span>
                        <span><button>Read full Ans</button></span></div>
              </div>
              <div className='questioncard'>
                        <div className='ques'>What is Ayurveda?</div>
                        <div className='ans'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime minima saepe quod modi fugit voluptatibus vero sapiente incidunt magnam? Sunt vitae doloribus nesciunt sapiente hic alias nisi id cum animi.Lorem ipsum dolor sit amet consectetur, adipisicing elit.</div>
                        <div className='quesdev'><span><i className="fa-regular fa-user"></i></span>  <span className='username'>  By:-Elon Musk</span>
                        <span><button>Read full Ans</button></span>
                        </div>
              </div>
        </div>
        <div className='advatiscontainer'>
              <div className='imgsection'>
                  <img  src='https://images.unsplash.com/photo-1524863479829-916d8e77f114?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eW9nYSUyMG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80' alt='yogaimg'/>
              </div>
              <div className='textsection'>
                  <div className='titleofadv'><div>HOW YOGA RELATED TO AYURVEDA ?</div></div>
                          <div className='descofyoga'>The aim of Ayurveda and yoga is to unify mind, body and consciousness
        Yoga literally means "union" or "to join together" in Sanskrit. It refers to the union of body, mind and soul. Yoga helps the mind become stronger by connecting the mind with the Self, the Atma.

This experience of unity is also the aim of Maharishi AyurVeda. For instance, the word Ayurveda is derived from the Sanskrit word ayu. </div>
                  <div className='readbutton'><button>Discover</button></div>
              </div>
        </div>
        <div className='advatiscontainer'>

        <div className='textsection'>
                  <div className='titleofadv'><div>What Is the Ayurvedic Diet?</div></div>
                          <div className='descofyoga'>
                          The Ayurvedic diet is an eating pattern that’s been around for thousands of years. It’s based on the principles of Ayurvedic medicine and focuses on balancing different types of energy within your body, which is said to improve health
                          Although the Ayurvedic diet has specific guidelines for each dosha, the diet as a whole encourages eating whole foods like fruits, vegetables, grains, and legumes.
                          This can benefit your health greatly, as these foods are rich in many essential nutrients.
                          The diet also minimizes processed foods, which often lack fiber and important vitamins and minerals.
                          </div>
                  <div className='readbutton'><button>Discover</button></div>
              </div>
              <div className='imgsection'>
                  <img  src='https://i0.wp.com/www.ayurtimes.com/wp-content/uploads/2019/06/Ayurvedic-Diet.jpg' alt='yogaimg'/>
              </div>
             
        </div>
        <footer>
         <div className='footercontainer'>
             <div className='socialIcons'>
                <div href=''><i class="fa-brands fa-instagram"></i></div>
                <div href=''><i class="fa-brands fa-facebook"></i></div>
                <div href=''><i class="fa-brands fa-twitter"></i></div>
                <div href=''><i class="fa-brands fa-youtube"></i></div>
             </div>
             <div className='footernav'>
               <ul>
                <li><a href='#'>blog</a></li>
                <li><a href='#'>WriteBLog</a></li>
                <li><a href='#'>DiseaseInfo</a></li>
                <li><a href='#'> QNA</a></li>
               </ul>
             </div>
             <div className='footerbutton'> 
                  <p>Copyright &copy;2023 Developed by <span className='devloper'> karan,dhruhit</span></p>
             </div>
             </div>
        </footer>
    </div>
   
    </>
  );
};

export default Homepage;
