import React from 'react'
import './Questionnpost.css';
const Questionnpost = () => {
  return (
    <>
      <div className='wraper'>
            <div className='post-container'>
                <div className='postbox'>
                    <div className='post-user-info'>
                        <div className='profile-img'>
                            <img src='https://cdn.the-scientist.com/assets/articleNo/34114/iImg/9405/f833bc7d-4f8a-4788-be47-6f1ff56e0ebe-critic.jpg' alt='profileimag'></img>
                        </div>
                        <div className='user-name'>
                            <div className='profile-name'>Karan Bhuva</div>
                            <div className='dataofpost'>02-08-2023</div>
                        </div>
                    </div>
                    <div className='questionnans'>
                            <div className='question'>What is AI?</div>
                            <div className='ans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, iste facere voluptatibus sapiente repellendus enim debitis dolorum adipisci ullam et ab atque nam totam dicta, necessitatibus voluptatum similique, consequuntur perspiciatis.</div>
                    </div>
                    
                    <div className='imageofpost'>
                            <img  src='https://www.europarl.europa.eu/resources/library/images/20230607PHT95601/20230607PHT95601_original.jpg' alt='imgpost'/>
                            <div className='nav-section'>
                                <div className='like'><i className="fa-regular fa-heart"></i></div>
                                <div className='dislike'><i className="fa-regular fa-thumbs-down"></i></div>
                                <div className='comment'><i className="fa-regular fa-comment"></i></div>
                                <div className='share'><i className="fa-solid fa-share-nodes"></i></div>
                            </div>
                    </div>
                   
                </div>
            </div>
      </div>
    </>
  )
}

export default Questionnpost
