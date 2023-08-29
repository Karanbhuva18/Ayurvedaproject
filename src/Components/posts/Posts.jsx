import React, { useState, useEffect } from 'react';
import './posts.css';
import axios from 'axios';
import Card from '../Card/Card';
import { NavLink } from 'react-router-dom';



const Posts = () => {


  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    // Fetch the data from your API endpoint
    axios.get('http://localhost:5000/blogs/all')
      .then(response => {
        // Set the fetched data to the state variable
        setBlogs(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
    <>
       <div className='posts gap-4'>
        
        {blogs.map((curele,idx)=>{
          return(
            <NavLink key={idx} className='posts' to="/Single" state = {{ blogs:blogs, idx:idx }} >
              <Card  img={curele.image} title={curele.title} category={curele.category} blog={curele.blog}/>
            </NavLink>
              )
        })}
        
        
       
    </div>
      
    </>
  )
}

export default Posts
