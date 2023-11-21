import React from 'react'
import { Link } from 'react-router-dom'
import xx99mark1 from'/product-xx99-mark-one-headphones/mobile/image-product.jpg'
import Gallery1Mark1 from '/product-xx99-mark-one-headphones/mobile/image-gallery-1.jpg'
import Gallery2Mark1 from '/product-xx99-mark-one-headphones/mobile/image-gallery-2.jpg'
import Gallery3Mark1 from '/product-xx99-mark-one-headphones/mobile/image-gallery-3.jpg'
import x99Mark2 from '/cart/shared/mobile/image-xx99-mark-two-headphones.jpg'
import speaker from '/cart/shared/mobile/image-zx9-speaker.jpg'
import xx59 from '/cart/shared/mobile/image-xx59-headphones.jpg'

import x99Mark2md from '/cart/shared/tablet/image-xx99-mark-two-headphones.jpg'
import x99Mark2lg from '/cart/shared/desktop/image-xx99-mark-two-headphones.jpg'

import speakermd from '/cart/shared/tablet/image-zx9-speaker.jpg'
import speakerlg from '/cart/shared/desktop/image-zx9-speaker.jpg'

import xx59md from '/cart/shared/tablet/image-xx59-headphones.jpg'
import xx59lg from '/cart/shared/desktop/image-xx59-headphones.jpg'



import xx99mark1md from'/product-xx99-mark-one-headphones/tablet/image-product.jpg'
import xx99mark1lg from'/product-xx99-mark-one-headphones/desktop/image-product.jpg'
import Gallery1Mark1md from '/product-xx99-mark-one-headphones/tablet/image-gallery-1.jpg'
import Gallery1Mark1lg from '/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg'

import Gallery2Mark1md from '/product-xx99-mark-one-headphones/tablet/image-gallery-2.jpg'
import Gallery2Mark1lg from '/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg'

import Gallery3Mark1md from '/product-xx99-mark-one-headphones/tablet/image-gallery-3.jpg'
import Gallery3Mark1lg from '/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg'


import yx1 from '/product-yx1-earphones/tablet/image-product.jpg'
import zx9 from '/cart/product-zx9-speaker/mobile/image-category-page-preview.jpg'
import {MdOutlineNavigateNext} from 'react-icons/md'


const X99mark1 = () => {
  return (
    <div>
    <Link className='text-gray-500 mt-5 ' to ='/'>Go back</Link>
    <div className='w-3/4 mx-auto'>
    <div className='flex justify-center'>
        <img className='lg:hidden md:hidden  mb-5' src={xx99mark1}/>
        </div>
        <div className='lg:hidden md:hidden flex flex-col '>
          <h1 className='mb-5 text-3xl text-black font-semibold'>XX99 Mark I<br/> Headphones</h1>
          <p className='  font-light mb-5'>As the gold standard for headphones,
             The classic XX99 Mark I offers detailed 
             and accurate audio reproduction for audiophiles,
             mixing engineers and music aficionados alike in studios and 
             on the go.
          </p>
          </div>
          
     <p className='md:hidden text-black font-bold mt-5 mb-5'>$1750</p>
      <div className=' md:hidden flex flex-row mb-20'>
        
        <button className='bg-gray-300 py-2 px-3'> - 
          
        </button>
        <button className='bg-gray-300 py-2 px-3 '>   1  
          
          </button>
          <button className='bg-gray-300  py-2 px-3 mr-3'>  +
          
          </button>
        
        <p className='bg-orange-main text-white px-5  py-2 '>ADD TO <br/>
        CART</p>
      </div>


     <div className='md:flex'>
     <div className='items-center'>
      <img src={xx99mark1md} className='hidden sm:hidden lg:hidden md:block w-3/4 mt-8 mb-10 mx-auto'/>
    <img src={xx99mark1lg} className='hidden sm:hidden md:hidden lg:block w-1/2 mx-auto'/>
    </div>

    <div className='hidden sm:hidden md:block md:w-3/4 mt-10 md:mb:9 items-center '>
 <h4 className='text-orange-500 text-sm -tracking-wide line-height-12 flex mt-3  justify-start'>NEW PRODUCT</h4>
    <h1 className='flex justify-start items-center 
    text-black font-semibold text-3xl mt-3 mb-3 md:text-4xl'>XX99 Mark I
    Headphones
    </h1>
    <p className='flex justify-center font-light items-center'>
    As the gold standard for headphones,
             The classic XX99 Mark I offers detailed 
             and accurate audio reproduction for audiophiles,
             mixing engineers and music aficionados alike in studios and 
             on the go.
       </p>
       <p className='hidden sm:hidden 
       md:block text-black font-bold mt-5 mb-5'>$1750</p>
       <div className='hidden sm:hidden md:block  mb-20'>
        <div className='flex flex-row'>
        <button className='bg-gray-300 py-2 px-3'> - 
          
        </button>
        <button className='bg-gray-300 py-2 px-3 '>   1  
          
          </button>
          <button className='bg-gray-300  py-2 px-3 mr-3'>  +
          
          </button>
        
        <button className='bg-orange-main text-white px-7  py-2 '>ADD TO <br/>
        CART</button>
       </div>
      </div>
      </div>
     </div>

  
     <div className='lg:flex items-center justify-evenly '>
        <div className='lg:w-1/2 '>
      <h1 className='font-semibold text-3xl mb-7'>FEATURES</h1>
      <p className=' font-light mb-5'>As the headphone all others are measured against,
        the XX99 Mark I demonstrates over five decades of audio 
        expertise, redefining the critical listening 
        experience. The pair of closed back-headphones are 
        made of industrial aerospace- grade materials to 
        emphasize durability at a relatively light weight 
        of 11oz.
      
      <br className='text-gray-600 mb-5'/>
        From the handcrafted microfibre ear cushions 
        to the robust metal headband with inner dumping 
        element, the components work together to deliver 
        comfort and uncompromising sound. Its closed 
        back-design delivers up to 27dB of passive 
        noise cancellation, reducing resonance by 
        reflecting sound to a dedicated absorber. 
        For connectivity, a specially tuned cable 
        is included with a balanced gold connector.
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


  
 
     
    <div className='md:flex items-center lg:flex justify-center'>
     <div>
      <img className='md:hidden lg:hidden mt-10 border rounded-lg  ' src={Gallery1Mark1}/>
      <img className='hidden sm:hidden lg:hidden 
      md:block w-3/4 mt-10 border rounded-lg mx-auto' src={Gallery1Mark1md}/>
  <img style={{height:'20%'}} className='hidden sm:hidden
   md:hidden lg:block mt-10 border rounded-lg lg:w-3/4 mx-auto' src={Gallery1Mark1lg}/>
      <img className='lg:hidden md:hidden mt-5 
      border rounded-lg md:w-1/4'src={Gallery2Mark1}/>
      <img className='hidden sm:hidden lg:hidden md:block 
      mt-5 border rounded-lg md:w-3/4 mx-auto'src={Gallery2Mark1md}/>
      <img className='hidden sm:hidden md:hidden 
      lg:block mt-5 border rounded-lg lg:w-3/4 mx-auto'src={Gallery2Mark1lg}/>
      
      
      </div>
      <img className=' md:hidden lg:hidden mt-5 
      border rounded-lg md:w-1/2' src={Gallery3Mark1}/>
      <img className=' hidden sm:hidden lg:hidden 
      md:block mt-5 border rounded-lg md:w-1/2' src={Gallery3Mark1md}/>
      <img style={{width:'40%'}} className=' hidden sm:hidden md:hidden 
      lg:block mt-5 border rounded-lg  ' src={Gallery3Mark1lg}/>


       </div>



    <h1 className='text-black uppercase flex justify-center
        items-center font-semibold text-3xl mt-7 mb-7'>you may also like</h1>




      <div className='flex flex-col md:flex-row justify-center items-center mx-auto'>
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
    <img src={xx59} className='lg:hidden md:hidden w-3/4 mb-4'/>
    <img src={xx59md} className='hidden sm:hidden lg:hidden md:block mb-0  w-3/4 mb-4 mx-auto'/>
    <img src={xx59lg} style={{}} className='hidden sm:hidden md:hidden lg:block w-3/4  mb-4'/>

    <div className='flex flex-col justify-center items-center'>
      <p className='text-2xl font-semibold mt-8 mb-8 '>XX59</p>
      <Link to='/x59'>
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
            <MdOutlineNavigateNext className='text-orange-700' />
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
      <MdOutlineNavigateNext className='text-orange-500'/>
    </span>
    
    </div>
  </div>
  <div className="relative bg-white mt-20 mb-20 flex justify-center">
  <img className='w-3/4 h-1/8 -mt-15 border rounded-lg' src={yx1} alt="Product Image 2" />
  <div className='absolute bottom-0 left-1/2 p-5 transform -translate-x-1/2 flex flex-col items-center  text-center p-4  '>
    <h4 className='text-black font-bold '>EARPHONES</h4>
    <span className='flex flex-row items-center justify-center mt-2 '>
      <p className='text-gray-400 text-sm '>SHOP</p>
      <MdOutlineNavigateNext className='text-orange-500'/>
    </span>
    </div>
  </div>



       </div>

    </div>
  )
}

export default X99mark1