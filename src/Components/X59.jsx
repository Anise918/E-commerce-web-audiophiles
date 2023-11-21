import React from 'react'

import { Link } from 'react-router-dom'
import xx59Head from '/product-xx59-headphones/mobile/image-product.jpg'
import Gallery1x59 from '/product-xx59-headphones/mobile/image-gallery-1.jpg'
import Gallery2x59 from '/product-xx59-headphones/mobile/image-gallery-2.jpg'
import Gallery3x59 from '/product-xx59-headphones/mobile/image-gallery-3.jpg'

import Gallery1x59md from '/product-xx59-headphones/tablet/image-gallery-1.jpg'
import Gallery1x59lg from '/product-xx59-headphones/desktop/image-gallery-1.jpg'

import Gallery2x59md from '/product-xx59-headphones/tablet/image-gallery-2.jpg'
import Gallery2x59lg from '/product-xx59-headphones/desktop/image-gallery-2.jpg'

import Gallery3x59md from '/product-xx59-headphones/tablet/image-gallery-3.jpg'
import Gallery3x59lg from '/product-xx59-headphones/desktop/image-gallery-3.jpg'


import x99mark1 from '/cart/shared/mobile/image-xx99-mark-one-headphones.jpg'
import speaker from '/cart/shared/mobile/image-zx9-speaker.jpg'
import x99Mark2 from '/cart/shared/mobile/image-xx99-mark-two-headphones.jpg'

import speakermd from '/cart/shared/tablet/image-zx9-speaker.jpg'
import speakerlg from '/cart/shared/desktop/image-zx9-speaker.jpg'

import x99mark1md from '/cart/shared/tablet/image-xx99-mark-one-headphones.jpg'
import x99mark1lg from '/cart/shared/desktop/image-xx99-mark-one-headphones.jpg'

import x99Mark2md from '/cart/shared/tablet/image-xx99-mark-two-headphones.jpg'
import x99Mark2lg from '/cart/shared/desktop/image-xx99-mark-two-headphones.jpg'

import xx59Headmd from '/product-xx59-headphones/tablet/image-product.jpg'
import xx59Headlg from '/product-xx59-headphones/desktop/image-product.jpg'

import xx99mark1 from'/product-xx99-mark-one-headphones/mobile/image-product.jpg'
import yx1 from '/product-yx1-earphones/tablet/image-product.jpg'
import zx9 from '/cart/product-zx9-speaker/mobile/image-category-page-preview.jpg'
import {MdOutlineNavigateNext} from 'react-icons/md'


const X59 = () => {
 
    

  return (
    <div>
   <Link className='text-gray-500 mt-5 mb-5 ' to ='/'>Go back</Link>
   <div className='w-3/4 mx-auto'>
   <div className='flex justify-center '>
          <img src={xx59Head} className='md:hidden lg:hidden w-full  mb-5'/>
          </div>
          <div className='md:hidden lg:hidden'>
            <h1 className=' flex justify-center 
            text-black font-semibold text-3xl mt-5'> XX59 Headphones</h1>
            <p className='font-light  flex justify-center mt-5'>
              Enjoy your audio almost anywhere
              and customize it to your specific tastes
              with the XX59 Headphones. 
              Th e stylish yet durable versatile wireless headset
              is a brilliant companion at home or on the move.
            </p>
            </div>

            <p className='md:hidden lg:hidden font-bold mb-7 mt-5'>$899</p>
            
        <div className='md:hidden lg:hidden flex flex-row  mb-20 '>
          <button  className='bg-gray-300 py-2 px-3'>
            -
          </button>
          <button className='bg-gray-300 py-2 px-3'>1</button>
          <p className='py-2'></p>
          <button  className='bg-gray-300 py-2 px-3 mr-3'>
            +
          </button>
          <Link to='/x59'>
            <button
              
              className='bg-orange-main text-white py-2 px-5'
            >
              ADD TO CART
            </button>
          </Link>
       
        </div>
        </div>

     <div className='md:flex  w-3/4 '>
     <div className='items-center mt-10'>
      <img src={xx59Headmd} className='hidden sm:hidden lg:hidden md:block w-3/4 mt-8 mb-10 mx-auto'/>
    <img style={{width:'70%'}}src={xx59Headlg} className='hidden sm:hidden md:hidden lg:block mx-auto'/>
    </div>
    <div className='hidden sm:hidden md:block w-3/4 mt-10 md:mb:9 items-center '>
 <h4 className='text-orange-500 text-sm -tracking-wide line-height-12 flex mt-3  justify-start'>NEW PRODUCT</h4>
    <h1 className='flex justify-start items-center 
    text-black font-semibold text-3xl mt-3 mb-3 md:text-4xl'>XX59
    Headphones
    </h1>
    <p className=' font-light  '>
    
             Enjoy your audio almost anywhere
              and customize it to your specific tastes
              with the XX59 Headphones. 
              Th e stylish yet durable versatile wireless headset
              is a brilliant companion at home or on the move.
         
       </p>

       <p className='hidden sm:hidden  md:block font-bold mb-10 mt-5'>$899</p>
            
       <div className='hidden sm:hidden md:block  mb-20'>
        <div className='flex flex-row'>
        <button className='bg-gray-300 py-1 px-3'> - 
          
        </button>
        <button className='bg-gray-300 py-1 px-3 '>   1  
          
          </button>
          <button className='bg-gray-300  py-1 px-3 mr-3'>  +
          
          </button>
        
        <button className='bg-orange-main text-white px-10  py-2 '>ADD TO <br/>
        CART</button>
       </div>
      
        

         </div>
         </div>
        </div>


        <div className='lg:flex items-center justify-between w-3/4 mx-auto '>
        <div className='lg:w-1/2 '>

    < h1 className='font-semibold text-3xl mb-7'>FEATURES</h1>
    <p className='text-gray-600  mb-5'>
    These headphones have been crafted from durable, 
    high-quality materials tough enough to take anywhere.
    Its compact solid design fuses comfort and minimalist 
    style making it perfect for travel. Flawless transmission 
    is assured by the latest wireless technology engineered 
    for audio synchronization with videos.
    
    <br className='text-gray-600  '/>
    More than a simple pair of headphones, this headset 
    features a pair of built in microphones for clear, 
    hands-free calling when paired with a compartible 
    smartphone.  Controlling music and call is also
    intuitive thanks to easy access touch buttons on the 
    earcups. Regardless of how you use the XX59 Headphones,
    you can do so all day thanks to an impresive 30 hour 
    battery life that can be rapidly recharged via USB-C
    </p>
   </div>

   <div className='lg:text-center'>
    <h1 className='mt-10  text-3xl font-semibold mb-7'>IN THE BOX</h1>
    <div className='flex flex-row gap-3'>
      <p className='text-orange-700'>1x</p>
      <p className='text-gray-700'>Headphone unit</p>
    </div>
    <div className='flex flex-row gap-3 mt-5'>
      <p className='text-orange-700'>2x</p>
      <p className='text-gray-700'>Replacement Earcup</p>
    </div>
    <div className='flex flex-row gap-3 mt-5'>
      <p className='text-orange-700'>1x</p>
      <p className='text-gray-700'>User Manual</p>
    </div>
    <div className='flex flex-row gap-3 mt-5'>
      <p className='text-orange-700'>1x</p>
      <p className='text-gray-700 mb-10'>3.5mm 5m audio cable</p>
    </div>
    </div>
    </div>

   
    


    <div className='md:flex items-center lg:flex justify-center w-3/4 mx-auto'>
     <div>
      <img className='md:hidden lg:hidden w-80 mx-auto mt-10 border rounded-lg'src={Gallery1x59}/>
      <img className='hidden sm:hidden lg:hidden 
      md:block w-3/4 mt-10 border rounded-lg mx-auto' src={Gallery1x59md}/>
  <img style={{height:'20%'}} className='hidden sm:hidden
   md:hidden lg:block mt-10 border rounded-lg lg:w-3/4 mx-auto' src={Gallery1x59lg}/>
      <img className='lg:hidden md:hidden mt-5 
      border rounded-lg w-80 mx-auto'src={Gallery2x59}/>
      <img className='hidden sm:hidden lg:hidden md:block 
      mt-5 border rounded-lg md:w-3/4 mx-auto'src={Gallery2x59md}/>
      <img className='hidden sm:hidden md:hidden 
      lg:block mt-5 border rounded-lg lg:w-3/4 mx-auto'src={Gallery2x59lg}/>
      
      
      </div>
      <img className=' md:hidden lg:hidden mt-5 
      border rounded-lg w-80 mx-auto' src={Gallery3x59}/>
      <img className=' hidden sm:hidden lg:hidden 
      md:block mt-5 border rounded-lg md:w-1/2' src={Gallery3x59md}/>
      <img style={{width:'40%'}} className=' hidden sm:hidden md:hidden 
      lg:block mt-5 border rounded-lg  ' src={Gallery3x59lg}/>


       </div>






    <h1 className='text-black uppercase flex justify-center
        items-center font-semibold text-3xl mt-7 mb-7'>you may also like</h1>
        
      <div className='flex flex-col md:flex-row justify-center items- lg:w-3/4 w-3/4  mx-auto'>
  <div className='flex flex-col items-center'>
    <img src={x99Mark2} className='lg:hidden md:hidden w-3/4 mb-4'/>
    <img src={x99Mark2md} className='hidden sm:hidden lg:hidden md:block mb-0 w-3/4 mb-4 mx-auto'/>
    <img src={x99Mark2lg} style={{}} className='hidden sm:hidden md:hidden lg:block  w-3/4 mb-4'/>

    <div className='flex flex-col justify-center items-center'>
      <p className='font-semibold text-2xl mt-8 mb-8'> XX99 Mark II </p>
      <Link to='/product'>
        <button className='bg-orange-700 py-2 px-7 mb-10 border  '>
          <span className='text-white text-sm'>SEE PRODUCT</span>
        </button>
      </Link>
    </div>
  </div>

  <div className='flex flex-col items-center md:ml-2'>
    <img src={x99mark1} className='lg:hidden md:hidden w-3/4 mb-4'/>
    <img src={x99mark1md} className='hidden sm:hidden lg:hidden md:block mb-0  w-3/4 mb-4 mx-auto'/>
    <img src={x99mark1lg} style={{}} className='hidden sm:hidden md:hidden lg:block w-3/4  mb-4'/>

    <div className='flex flex-col justify-center items-center'>
      <p className='text-2xl font-semibold mt-8 mb-8 '>XX 99 Mark I</p>
      <Link to='/X99mark1'>
        <button className='bg-orange-700 py-2 px-7 border  mb-10'>
          <span className='text-white text-sm'>SEE PRODUCT</span>
        </button>
      </Link>
    </div>
  </div>

  <div className='flex flex-col items-center md:ml-2 mb-3'>
    <img src={speaker} className='lg:hidden md:hidden w-3/4 mb-4'/>
    <img src={speakermd} className='hidden sm:hidden lg:hidden md:block w-3/4 mb-4 mx-auto'/>
    <img src={speakerlg} className='hidden sm:hidden md:hidden lg:block w-3/4 mb-4'/>

    <div className='flex flex-col justify-center items-center'>
      <p className='text-2xl font-semibold mt-10 mb-8'>ZX9 Speaker</p>
      <Link to='/zx9'>
        <button className='py-2 px-7 bg-orange-700 '>
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
            <Link to='/headphones'>
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

export default X59