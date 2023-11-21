import React from 'react'
import { Link } from 'react-router-dom'
import YX1ear from '/product-yx1-earphones/mobile/image-product.jpg'
import Gallery1Ear from '/product-yx1-earphones/mobile/image-gallery-1.jpg'
import Gallery2Ear from '/product-yx1-earphones/mobile/image-gallery-2.jpg'
import Gallery3Ear from '/product-yx1-earphones/mobile/image-gallery-3.jpg'
import xx59 from '/cart/shared/mobile/image-xx59-headphones.jpg'
import x99mark1 from '/cart/shared/mobile/image-xx99-mark-one-headphones.jpg'
import speaker from '/cart/shared/mobile/image-zx9-speaker.jpg'

import Gallery1Earmd from '/product-yx1-earphones/tablet/image-gallery-1.jpg'
import Gallery1Earlg from '/product-yx1-earphones/desktop/image-gallery-1.jpg'

import Gallery2Earmd from '/product-yx1-earphones/tablet/image-gallery-2.jpg'
import Gallery2Earlg from '/product-yx1-earphones/desktop/image-gallery-2.jpg'

import Gallery3Earmd from '/product-yx1-earphones/tablet/image-gallery-3.jpg'
import Gallery3Earlg from '/product-yx1-earphones/desktop/image-gallery-3.jpg'

import YX1earmd from '/product-yx1-earphones/tablet/image-product.jpg'
import YX1earlg from '/product-yx1-earphones/desktop/image-product.jpg'

import xx59md from '/cart/shared/tablet/image-xx59-headphones.jpg'
import xx59lg from '/cart/shared/desktop/image-xx59-headphones.jpg'
import speakermd from '/cart/shared/tablet/image-zx9-speaker.jpg'
import speakerlg from '/cart/shared/desktop/image-zx9-speaker.jpg'

import x99mark1md from '/cart/shared/tablet/image-xx99-mark-one-headphones.jpg'
import x99mark1lg from '/cart/shared/desktop/image-xx99-mark-one-headphones.jpg'

import xx99mark1 from'/product-xx99-mark-one-headphones/mobile/image-product.jpg'
import yx1 from '/product-yx1-earphones/tablet/image-product.jpg'
import zx9 from '/cart/product-zx9-speaker/mobile/image-category-page-preview.jpg'
import {MdOutlineNavigateNext} from 'react-icons/md'


const Yx1 = ({addToCart,removeFromCart}) => {
  return (
    <div>
        <Link className='text-gray-500 mt-5 ' to ='/'>Go back</Link>
        <div className='md:hidden lg:hidden flex justify-center'>
        <img src={YX1ear} className='w-80 border rounded-lg mb-5'/>
        </div>
        <h4 className=' md:hidden lg:hidden text-sm text-orange-700 mb-5'>NEW PRODUCT</h4>
        <h1 className=' md:hidden lg:hidden font-semibold text-3xl mb-5'>YX1 Wireless<br/> Earphones</h1>
        
        <p className='md:hidden lg:hidden text-gray-600  mb-5'>
              Tailor your listening experience with bespoke
              dynamic drives from the new YX1 Wireless 
              Earphones. Enjoy incredible high-fidelity sound
              even in noisy enviroments with its active
              noise cancellation feature.
            </p>
            <p className='md:hidden lg:hidden font-bold mb-7 ' >$599</p>
            <div className=' md:hidden lg:hidden flex flex-row mb-20'>
        
        <button className='bg-gray-300 py-2 px-3'> - 
          
        </button>
        <button className='bg-gray-300 py-2 px-3 '>   1  
          
          </button>
          <button className='bg-gray-300  py-2 px-3 mr-3'>  +
          
          </button>
        
        <p className='bg-orange-600 text-white px-7  py-2 '>ADD TO <br/>
        CART</p>
      </div>



 
     <div className='flex'>
     <div className='items-center'>
      <img src={YX1earmd} className='hidden sm:hidden lg:hidden md:block w-3/4 mt-8 mb-10 mx-auto'/>
    <img src={YX1earlg} className='hidden sm:hidden md:hidden lg:block w-1/2 mx-auto'/>
    </div>
    <div className='hidden sm:hidden md:block md:w-3/4 mt-10 md:mb:9 items-center '>
 <h4 className='text-orange-500 text-sm -tracking-wide line-height-12 flex mt-3  justify-start'>NEW PRODUCT</h4>
    <h1 className='flex justify-start items-center 
    text-black font-semibold text-3xl mt-3 mb-3 md:text-4xl'>YX1 Wireless Earphones
    
    </h1>
    <p className='flex justify-center items-center'>
    
             Tailor your listening experience with bespoke
              dynamic drives from the new YX1 Wireless 
              Earphones. Enjoy incredible high-fidelity sound
              even in noisy enviroments with its active
              noise cancellation feature.
         
       </p>

       <p className='hidden sm:hidden  md:block font-bold mb-10 mt-5'>$599</p>
            
       <div className='hidden sm:hidden md:block  mb-20'>
        <div className='flex flex-row'>
        <button className='bg-gray-300 py-2 px-5'> - 
          
        </button>
        <button className='bg-gray-300 py-2 px-5 '>   1  
          
          </button>
          <button className='bg-gray-300  py-2 px-5 mr-3'>  +
          
          </button>
        
        <button className='bg-orange-600 text-white px-10  py-2 '>ADD TO <br/>
        CART</button>
       </div>
      
        
        </div>
         </div>
         </div>



     
         <div className='lg:flex items-center justify-center '>
        <div className='lg:w-1/2 '>
        <h1 className='text-3xl font-semibold mb-5'>FEATURES</h1>
        <p className='text-gray-600 mb-5'>
            Experience unrivaled stereo sound thanks to 
            innovative acoustic technology. With improved 
            egornomics designed for full day wearing, these 
            revolutionary earphones have been finely crafted
            to provide you with the perfect fit, delivering 
            complete comfort all day long while enjoying 
            exceptional noise isolation and truly
            immersive sound.
        
        <br className='text-gray-600 '/>
          The YX1 Wireless Earphones features customizable
          controls for volume,music, calls and voice 
          assistants built into both earbuds.
          The new 7-hour battery life can be extended
          upto 28hrs  with the charging case, giving 
          you uninterrupted play time.Exquisite 
          craftmanship with a splash  resistance design 
          now available in an all new white and grey color 
          scheme as well as the popular classic black.
        </p>
        </div>
        <div className='lg:text-center'>
        <h1 className='mt-10  text-3xl font-semibold mb-7'>IN THE BOX</h1>
    <div className='flex flex-row gap-3'>
      <p className='text-orange-700'>2x</p>
      <p className='text-gray-700'>Earphone Unit unit</p>
    </div>
    <div className='flex flex-row gap-3 mt-5'>
      <p className='text-orange-700'>6x</p>
      <p className='text-gray-700'>Multi-size Earplugs</p>
    </div>
    <div className='flex flex-row gap-3 mt-5'>
      <p className='text-orange-700'>1x</p>
      <p className='text-gray-700'>User Manual</p>
    </div>
    <div className='flex flex-row gap-3 mt-5'>
      <p className='text-orange-700'>1x</p>
      <p className='text-gray-700'>USB-C Charging Cable</p>
    </div>

    <div className='flex flex-row gap-3 mt-5 mb-10'>
      <p className='text-orange-700'>1x</p>
      <p className='text-gray-700'>Travel Pouch</p>
    </div>
    </div>
    </div>

  

    <div className='md:flex items-center lg:flex justify-center'>
     <div>
      <img className='md:hidden lg:hidden mt-10 border rounded-lg'src={Gallery1Ear}/>
      <img className='hidden sm:hidden lg:hidden 
      md:block w-3/4 mt-10 border rounded-lg mx-auto' src={Gallery1Earmd}/>
  <img style={{height:'20%'}} className='hidden sm:hidden
   md:hidden lg:block mt-10 border rounded-lg lg:w-3/4 mx-auto' src={Gallery1Earlg}/>
      <img className='lg:hidden md:hidden mt-5 
      border rounded-lg md:w-1/4'src={Gallery2Ear}/>
      <img className='hidden sm:hidden lg:hidden md:block 
      mt-5 border rounded-lg md:w-3/4 mx-auto'src={Gallery2Earmd}/>
      <img className='hidden sm:hidden md:hidden 
      lg:block mt-5 border rounded-lg lg:w-3/4 mx-auto'src={Gallery2Earlg}/>
      
      
      </div>
      <img className=' md:hidden lg:hidden mt-5 
      border rounded-lg md:w-1/2' src={Gallery3Ear}/>
      <img className=' hidden sm:hidden lg:hidden 
      md:block mt-5 border rounded-lg md:w-1/2' src={Gallery3Earmd}/>
      <img style={{width:'40%'}} className=' hidden sm:hidden md:hidden 
      lg:block mt-5 border rounded-lg  ' src={Gallery3Earlg}/>

       </div>



    <h1 className='text-black uppercase flex justify-center
        items-center font-semibold text-3xl mt-7 mb-7'>you may also like</h1>


<div className='flex flex-col md:flex-row justify-center items-center mx-auto'>
<div className='flex flex-col items-center md:ml-2'>
    <img src={x99mark1} className='lg:hidden md:hidden w-3/4 mb-4'/>
    <img src={x99mark1md} className='hidden sm:hidden lg:hidden md:block mb-0  w-3/4 mb-4 mx-auto'/>
    <img src={x99mark1lg} style={{}} className='hidden sm:hidden md:hidden lg:block w-3/4  mb-4'/>

    <div className='flex flex-col justify-center items-center'>
      <p className='text-2xl font-semibold mt-8 mb-8 '>XX99 Mark I</p>
      <Link to='/X99mark1'>
        <button className='bg-orange-700 py-2 px-7 border  mb-10'>
          <span className='text-white text-sm'>SEE PRODUCT</span>
        </button>
      </Link>
    </div>
  </div>

  <div className='flex flex-col items-center md:ml-2 mb-3'>
    <img src={xx59} className='lg:hidden md:hidden w-3/4 mb-4'/>
    <img src={xx59md} className='hidden sm:hidden lg:hidden md:block w-3/4 mb-4 mx-auto'/>
    <img src={xx59lg} className='hidden sm:hidden md:hidden lg:block w-3/4 mb-4'/>

    <div className='flex flex-col justify-center items-center'>
      <p className='text-2xl font-semibold mt-10 mb-8'>XX59</p>
      <Link to='/x59'>
        <button className='py-2 px-7 bg-orange-700 '>
          <span className='text-white text-sm'>SEE PRODUCT</span>
        </button>
      </Link>
    </div>
  </div>
  <div className='flex flex-col items-center'>
    <img src={speaker} className='lg:hidden md:hidden w-3/4 mb-4'/>
    <img src={speakermd} className='hidden sm:hidden lg:hidden md:block mb-0 w-3/4 mb-4 mx-auto'/>
    <img src={speakerlg} style={{}} className='hidden sm:hidden md:hidden lg:block  w-3/4 mb-4'/>

    <div className='flex flex-col justify-center items-center'>
      <p className='font-semibold text-2xl mt-8 mb-8'> ZX9 Speaker </p>
      <Link to='/zx9'>
        <button className='bg-orange-700 py-2 px-7 mb-10 border  '>
          <span className='text-white text-sm'>SEE PRODUCT</span>
        </button>
      </Link>
    </div>
  </div>
</div>





       
      
      <div className='relative bg-white mt-40'>
          <div className='flex justify-center'>
        <img className='w-3/4 border rounded-lg -mt-20' src={xx99mark1}
         alt="Product Image 1" />
         </div>
        <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2  flex flex-col  items-center justify-end text-center'>
          <h4 className='text-black text-sm font-bold '>HEADPHONES</h4>
          <div className='flex flex-row items-center justify-center'>
            <p className='mr-2 text-gray-400 text-sm'>SHOP</p>
            <Link to='headphones'>
            <MdOutlineNavigateNext className='text-orange-700' />
            </Link>
          </div>
        </div>
      </div>
      <div className="relative bg-white rounded-lg mt-20 w-full h-full flex justify-center items-center">
      
  <img  className=' -p-10 w-3/4 border rounded-lg h-auto 
  justify-center items-center ' src={zx9} alt="Product Image 2" />
  <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2  flex flex-col items-center  text-center p-4  '>
    <h4 className='text-black font-bold '>SPEAKERS</h4>
    <span className='flex flex-row items-center justify-center mt-2 '>
      <p className='text-gray-400 text-sm '>SHOP</p>
      <Link to='/speakers'>
      <MdOutlineNavigateNext className='text-orange-500'/>
      </Link>
    </span>
    
    </div>
  </div>
  <div className="relative bg-white mt-20 mb-20 flex justify-center">
  <img className='w-3/4 h-1/8 -mt-15 border rounded-lg' src={yx1} alt="Product Image 2" />
  <div className='absolute bottom-0 left-1/2 p-5 transform -translate-x-1/2 flex flex-col items-center  text-center p-4  '>
    <h4 className='text-black font-bold '>EARPHONES</h4>
    <span className='flex flex-row items-center justify-center mt-2 '>
      <p className='text-gray-400 text-sm '>SHOP</p>
      <Link to='/earphones'>
      <MdOutlineNavigateNext className='text-orange-500'/>
      </Link>
    </span>
    </div>
  </div>



    </div>
  )
}

export default Yx1