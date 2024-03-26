import React from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from '../component/Navbar';
import hero from "../assets/hero.jpg";
import Button from '../component/Button';
import hero2 from "../assets/hero2.png"; // Import the hero2 image

const Home = () => {
  const navigate = useNavigate();
  const handelclick=()=>{
    navigate('/register')
  }
  return (
    <div>
      <div className='w-full h-screen relative'>
        <div
          className='absolute inset-0 bg-cover bg-center'
          style={{ backgroundImage: `url(${hero})`, filter: 'blur(5px)', zIndex: -1 }}
        ></div>
        <div className='pt-50 z-100 flex h-screen justify-evenly items-center'>
          <div className='text-center'>
            <p className='text-5xl font-bold'>Manage your patients easily</p>
            <button onClick={handelclick} className='bg-white font-bold text-3xl p-2 rounded mt-5 mx-auto'>Get started</button>
          </div>
          <div>
            <img src={hero2} alt="Hero2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

