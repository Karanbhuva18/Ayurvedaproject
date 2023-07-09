import React from 'react'
import './post.css'
const Post = () => {
  return (
    <>
        <div className='post'>
                <img className='postImg' src='https://himalayanyoganepal.com/wp-content/uploads/2020/01/Ayurveda-in-Nepal.jpg' alt=''/>
            <div className='postInfo'>
                    <div className='postCats'>
                            <span className="postCat">Music</span>
                            <span className="postCat">Life</span>

                    </div>
                    <span className='postTitle'>
                        Lorem ipsum dolor sit amet 
                    </span>
                    <hr />
                    <span className='postDate'>1 houre ago</span>
            </div>
            <p className='postDesc'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi iure magni asperiores, aliquid qui quasi minima enim possimus vero delectus repellendus necessitatibus. Doloremque, quae facilis. Blanditiis neque suscipit quisquam earum.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi iure magni asperiores, aliquid qui quasi minima enim possimus vero delectus repellendus necessitatibus. Doloremque, quae facilis. Blanditiis neque suscipit quisquam earum.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi iure magni asperiores, aliquid qui quasi minima enim possimus vero delectus repellendus necessitatibus. Doloremque, quae facilis. Blanditiis neque suscipit quisquam earum.
            </p>
        </div>

    </>
  )
}

export default Post
