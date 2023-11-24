import React, { useState } from 'react';
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';
import './index.css';
import {MdOutlineNavigateNext} from 'react-icons/md'



import { AiOutlineShoppingCart} from 'react-icons/ai'
import { ImMenu } from 'react-icons/im'
import {FaTwitter } from 'react-icons/fa'
import {IoLogoFacebook} from 'react-icons/io'
import {FiInstagram}from 'react-icons/fi'
import bestGear from '/cart/shared/mobile/image-best-gear.jpg'

import bestgearmd from '/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg'

import bestgearlg from '/cart/shared/desktop/image-best-gear.jpg'
import yx1 from '/product-yx1-earphones/mobile/image-product.jpg'
import zx9 from '/cart/product-zx9-speaker/mobile/image-category-page-preview.jpg'
import xx99mark1 from'/product-xx99-mark-one-headphones/mobile/image-product.jpg'
import xx99mark1tb from'/product-xx99-mark-one-headphones/tablet/image-product.jpg'
import xx99mark1des from'/product-xx99-mark-one-headphones/desktop/image-product.jpg'

import zx9tb from '/cart/product-zx9-speaker/tablet/image-product.jpg'
import zx9des from '/cart/product-zx9-speaker/desktop/image-product.jpg'

import yx1tb from '/product-yx1-earphones/tablet/image-product.jpg'
import yx1des from '/product-yx1-earphones/desktop/image-product.jpg'




import Items from './Components/Items';
import Product from './Components/Product';
import Headphones from './Components/Headphones';
import Speakers from './Components/Speakers';
import Earphones from './Components/Earphones';
import Zx9 from './Components/Zx9';
import Zx7 from './Components/Zx7';
import Yx1 from './Components/Yx1';
import X99mark1 from './Components/X99mark1';
import X59 from './Components/X59';
import Cartcard from './Components/Cartcard';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 
  



  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
  };






  return (
    <BrowserRouter className='w-3/4 mx-auto'>
    <header className='lg:hidden md:hidden  pb-8 header bg-black text-white flex flex-row justify-around p-10'>
    <ImMenu onClick={toggleMenu} className='cursor-pointer'/>
    
     <p className='font-bold text-xl'>audiophile</p>
    
     <AiOutlineShoppingCart />
     
     
      
    </header>

    <header className='hidden sm:hidden md:flex bg-black pt-7 pb-8 uppercase items-center justify-evenly'>
  <div>
    <h1 className='text-white lowercase text-3xl font-bold'>audiophile</h1>
  </div>
  <div className='flex flex-row text-white font-semibold'>
    <ul className='flex flex-row'>
      <li className='px-2'>
        <Link to="/" className='hover:text-orange-700'>
          Home
        </Link>
      </li>
      <li className='px-2'>
        <Link to="/headphones" className='hover:text-orange-700'>
          Headphones
        </Link>
      </li>
      <li className='px-2'>
        <Link to="/speakers" className='hover:text-orange-700'>
          Speakers
        </Link>
      </li>
      <li className='px-2'>
        <Link to="/earphones" className='hover:text-orange-700'>
          Earphones
        </Link>
      </li>
    </ul>
  </div>
  <div className='text-white'>
    <AiOutlineShoppingCart />
  </div>
</header>



    <nav
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } lg:hidden w-1/2 h-full bg-black text-white font-semibold flex justify-center text-lg uppercase absolute z-10 `}
      >
        <ul>
         
        <li className='py-2'>
  <Link to="/" onClick={closeMenu} className='hover:text-orange-700'>
    Home
  </Link>
</li>
<li className='py-2'>
  <Link to="/headphones" onClick={closeMenu} className='hover:text-orange-700'>
    Headphones
  </Link>
</li>
<li className='py-2'>
  <Link to="/speakers" onClick={closeMenu} className='hover:text-orange-700'>
    Speakers
  </Link>
</li>
<li className='py-2'>
  <Link to="/earphones" onClick={closeMenu} className='hover:text-orange-700'>
    Earphones
  </Link>
</li>

        </ul>
         

      </nav>
    

        <Routes>
          <Route path="/" element={<Items />} />
          <Route path="/product" element={<Product />} />
          <Route path="/headphones" element={<Headphones />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/earphones" element={<Earphones />} />
          <Route path ='/zx9' element={<Zx9/>}/>
          <Route path='/zx7' element={<Zx7/>}/>
          <Route path='/yx1' element={<Yx1/>}/>
          <Route path= '/X99mark1' element={<X99mark1/>}/>
          <Route path='/x59' element={<X59/>}/>
        </Routes>
      
        
       

      
 
        


    <div className='mt-20 p-50 justify-center w-3/4 mx-auto'>
      <div className='flex justify-center'>
    <img className=' lg:hidden md:hidden  border rounded-lg ' src={bestGear}/>
  
    <img src={bestgearmd} className='hidden sm:hidden lg:hidden  md:block'/>
    </div>

    <div className='lg:hidden mb-10'>
      <p className='text-black  text-3xl text-center uppercase font-semibold mt-10 mb-10'> Bringing you the 
      <span className='text-orange-800 '> best </span> audio gear.</p>
      <p className=' text-black font-light  items-center flex justify-center '>Located at the heart of NewYork City
      AudioPhile is the premier store for high end
      headphones,earphones,speakers and audio
      accessories. We have large showroom and
      luxury demonstration rooms available for you
      to browse and experience a wide range of our
      products. Stop by our store to meet some of
      the fantastic people who make Audiophile the 
      best place to buy your portable audio<br/>
      equipment.
      </p>
    </div>
  </div>

  <div className=' hidden sm:hidden md:hidden lg:flex justify-evenly w-3/4 mx-auto'>
  <div className='flex-1'>
    <p className='text-black w-full  text-3xl text-center uppercase font-semibold mt-10 mb-10'>
      Bringing you the 
      <span className='text-orange-800 '> best </span> audio gear.
    </p>
    <p className='text-md text-black font-light w-full  flex justify-center md:justify-start'>
      Located at the heart of New York City, AudioPhile is the premier store for high-end
      headphones, earphones, speakers, and audio accessories. We have a large showroom and
      luxury demonstration rooms available for you to browse and experience a wide range of our
      products. Stop by our store to meet some of the fantastic people who make Audiophile the 
      best place to buy your portable audio<br/>
      equipment.
    </p>
  </div>
  
  <img src={bestgearlg} className='w-full md:w-1/2 mb-10'/>
</div>



  
     <div>
      <footer className='md:hidden lg:hidden  bg-black text-white mt-20 flex flex-col items-center justify-center'>
  <div className= 'w-full'>
    <div className='md:w-1/2 md:flex flex-row  items-center '>
      <div className='  text-center md:text-left md:flex justify-center '>
        <h4 className='items-center  justify-between mt-10 
        text-3xl  font-bold md:mt-2  '>audiophile</h4>
        <div className='flex flex-col gap-4 '>
          
        <ul className='flex flex-col gap-4 text-white font-light text-2xl'>
  <li className='uppercase text-xl font-semibold mt-5 hover:text-orange-700'>
    <Link to='/'>Home</Link>
  </li>
  <li className='uppercase text-xl font-semibold mt-5  hover:text-orange-700'>
    <Link to='/headphones'>Headphones</Link>
  </li>
  <li className='uppercase text-xl font-semibold mt-5 hover:text-orange-700'>
    <Link to='/speakers'>Speakers</Link>
  </li>
  <li className='uppercase text-xl font-semibold mt-5 hover:text-orange-700'>
    <Link to='/earphones'>Earphones</Link>
  </li>
</ul>


        </div>
      </div>
    </div>
  
    <div className='md:w-3/4 lg:w-1/2'>
      <p className='text-gray-300  text-md  mt-10  md:text-left'>
        Audiophile is an all-in-one stop to fulfill your audio needs.
         We are a small team of music lovers and sound 
        specialists who are devoted to helping you get the most out of personal audio.
         Come and visit our demo facility - we're open 7 days a week.
      </p>
    </div>
  

  <p className='mt-10 text-gray-300 text-center md:text-left'>Copyright 2021. All Rights Reserved</p>
 </div>
  
  <div  className='text-white  flex flex-row gap-6 mt-10 mb-10 md:mt-1 '>
        <IoLogoFacebook  className='text-white  hover:text-orange-700'/>
        <FaTwitter className='text-white hover:text-orange-700' />
        <FiInstagram className='text-white hover:text-orange-700'/>
        </div>
       

</footer>
      
  
   <footer className='hidden sm:hidden md:block bg-black '>
    <div className='justify-center'>
    <div className='flex items-center justify-around pt-20 mb-10'>
    <div>
      <h1 className='text-white text-3xl font-bold'>audiophile</h1>
    </div>
    <div>
    
    <ul className='flex flex-row gap-4 text-white'>
  <li className='uppercase text-sm font-semibold hover:text-orange-main'>
    <Link to='/'>Home</Link>
  </li>
  <li className='uppercase text-sm font-semibold hover:text-orange-main'>
    <Link to='/headphones'>Headphones</Link>
  </li>
  <li className='uppercase text-sm font-semibold hover:text-orange-main'>
    <Link to='/speakers'>Speakers</Link>
  </li>
  <li className='uppercase text-sm font-semibold hover:text-orange-main'>
    <Link to='/earphones'>Earphones</Link>
  </li>
</ul>



    </div>
    </div>
    <div className='flex justify-around pb-15'>
    <p className='md:w-1/2 text-white font-light lg:w-1/3 flex items-center mb-20'>
         Audiophile is an all-in-one stop to fulfill your audio needs.
         We are a small team of music lovers and sound 
        specialists who are devoted to helping you get the most out of personal audio.
         Come and visit our demo facility - we're open 7 days a week.

         <br className='pt-10'/>
         Copyright 2021. All Rights Reserved

    </p>
    

    <div  className='text-white  flex flex-row gap-6 mt-10 mb-15 '>
        <IoLogoFacebook  className='text-white  hover:text-orange-700'/>
        <FaTwitter className='text-white hover:text-orange-700' />
        <FiInstagram className='text-white hover:text-orange-700'/>
        </div>
        </div> 
        
           </div>
   </footer>


        </div>
      


    </BrowserRouter>
  );
}

export default App;