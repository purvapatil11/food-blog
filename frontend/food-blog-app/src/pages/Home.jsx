import React from 'react'
import foodImage from '../assets/foodRecipie.jpg'
import Recipieitems from '../components/Recipieitems'
// import profilePhoto from '../assets/profilephoto.webp'

export default function Home() {
  return (
    <>
    
      <section className="home">
        <div className="left">
          <h1>Food Recipe</h1>
          <h5>lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </h5>
          <button>Share your recipe</button>
        </div>

        <div className="right">
          <img src={foodImage} width="320px" height="300px" alt="Food Recipe" />
        </div>
      </section>

      <div className="bg">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#d4f6e8" fill-opacity="1" d="M0,128L30,128C60,128,120,128,180,122.7C240,117,300,107,360,117.3C420,128,480,160,540,186.7C600,213,660,235,720,240C780,245,840,235,900,218.7C960,203,1020,181,1080,144C1140,107,1200,53,1260,80C1320,107,1380,213,1410,266.7L1440,320L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
      </div>
      <div className='recipie'>
        <Recipieitems/>
      </div>
       </>
  )
}

