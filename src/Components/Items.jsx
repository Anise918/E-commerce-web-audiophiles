import React from 'react';
import xxheadp from '/cart/home/mobile/image-header.jpg'
import zx9sp from '/cart/home/mobile/image-speaker-zx9.png'
import yx1 from '/product-yx1-earphones/mobile/image-product.jpg'
import yxxx1 from '/product-yx1-earphones/tablet/image-product.jpg'
import zx9 from '/cart/product-zx9-speaker/mobile/image-category-page-preview.jpg'
import imageHero from'/cart/home/desktop/image-hero.jpg'
import imageHeader from '/cart/home/tablet/image-header.jpg'
import x99mark1md from '/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg'

import yx1lg from '/cart/home/desktop/image-earphones-yx1.jpg'
import yx1md from '/cart/home/tablet/image-earphones-yx1.jpg'
import zx7md from '/cart/home/tablet/image-speaker-zx7.jpg'
import zx7lg from '/cart/home/desktop/image-speaker-zx7.jpg'
import zzx9 from '/cart/home/mobile/image-speaker-zx7.jpg'
import yx1er from '/cart/home/mobile/image-earphones-yx1.jpg'
import bestGear from '/cart/shared/mobile/image-best-gear.jpg'
import xx99mark1 from'/product-xx99-mark-one-headphones/mobile/image-product.jpg'
import xx99mark1tb from'/product-xx99-mark-one-headphones/tablet/image-product.jpg'
import xx99mark1des from'/product-xx99-mark-one-headphones/desktop/image-product.jpg'

import zx9tb from '/cart/product-zx9-speaker/tablet/image-product.jpg'
import zx9des from '/cart/product-zx9-speaker/desktop/image-product.jpg'

import yx1tb from '/product-yx1-earphones/tablet/image-product.jpg'
import yx1des from '/product-yx1-earphones/desktop/image-product.jpg'


import {Link} from 'react-router-dom'

import {MdOutlineNavigateNext} from 'react-icons/md'

const Items = () => {
  return (
    <div className=''>
      <hr className='text-gray-600' />
      
     <div className=''>
      <div className='relative  '>
  
  <div className='lg:hidden md:hidden '>
    <div className='  absolute inset-0 flex flex-col justify-center items-center'>
      <h4 className='text-sm text-gray-500 tracking-widest'>NEW PRODUCT</h4>
      <h1 className='font-semibold mb-4 capitalize text-white text-4xl'>XX99 Mark II <br/> Headphones</h1>
      <p className='text-sm text-center mb-4 text-gray-300'>
        Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
      </p>
      <Link to='/product'>
        <button className='bg-orange-main py-2 px-4 rounded text-white hover:bg-orange-600 text-lg font-semibold'>
          <span>SEE PRODUCT</span>
        </button>
      </Link>
    </div>
  </div>
    <img src={xxheadp} alt='Headphones' className='lg:hidden md:hidden' />
  
</div>

<div className='hidden lg:block relative  '>
  <div className='absolute lg:left-1/4 top-1/2  transform -translate-x-1/2 -translate-y-1/2  '>
  <h4 className='text-sm text-gray-500 tracking-widest'>NEW PRODUCT</h4>
  <h1 className='font-semibold mb-4 capitalize text-white text-6xl'>XX99 Mark II <br/> Headphones</h1>
  <p className='text-md  mb-4 text-white font-light'>
    Experience natural, lifelike audio and exceptional build quality made for the<br/> passionate music enthusiast.
  </p>
  <Link to='/product'>
    <button className='bg-orange-light py-2 px-4  text-white hover:bg-orange-600 text-sm '>
      <span>SEE PRODUCT</span>
    </button>
  </Link>
  </div>
  <div>
    <img src={imageHero} className='hidden lg:block '/>
  </div>
</div>


<div className='relative'>
  
  <div className='hidden lg:hidden md:block sm:hidden'>
    <img src={imageHeader} alt='Headphones' className='w-full h-auto' />
    
    
    <div className='absolute inset-0 flex flex-col justify-center items-center text-center'>
      <h4 className='text-sm text-gray-500 tracking-widest'>NEW PRODUCT</h4>
      <h1 className='font-semibold mb-4 capitalize text-white text-6xl'>XX99 Mark II <br/> Headphones</h1>
      <p className='text-sm text-center mb-4 text-gray-300'>
        Experience natural, lifelike audio and exceptional<br/> 
        build quality made for the passionate music<br/> enthusiast.
      </p>
      <Link to='/product'>
        <button className='bg-orange-main py-2 px-4  text-white hover:bg-orange-600 text-sm '>
          <span>SEE PRODUCT</span>
        </button>
      </Link>
    </div>
  </div>
</div>

     <div className=' md:flex w-3/4 mx-auto gap-3'>

     <div className='relative max-w-xs  bg-white mt-20'>
  <div className='border rounded-lg overflow-hidden relative'>


    <img className='md:hidden lg:hidden max-w-full h-auto
     -mt-12' src={xx99mark1} alt="Product Image 1" />
     <img className='hidden sm:hidden lg:hidden md:block max-w-full h-auto
     -mt-12' src={xx99mark1tb} alt="Product Image 1" />
     <img className='hidden sm:hidden md:hidden lg:block max-w-full h-auto
     -mt-12' src={xx99mark1des} alt="Product Image 1" />
     
     

    <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-end text-center'>
      <h4 className='text-black text-sm font-bold'>HEADPHONES</h4>
      <div className='flex flex-row items-center justify-center'>
        <p className='mr-2 text-gray-400 text-sm'>SHOP</p>
        <Link to='/Headphones'>
          <MdOutlineNavigateNext className='text-orange-700' />
        </Link>
      </div>
    </div>
  </div>
</div>

     
    
     
<div className='relative max-w-xs  bg-white mt-20 '>
  <div className='border rounded-lg overflow-hidden relative'>
    <img className='md:hidden lg:hidden max-w-full h-auto -mt-12' 
    src={zx9} alt="Product Image 1" />
<img className='hidden sm:hidden lg:hidden md:block max-w-full h-auto -mt-12' 
    src={zx9tb} alt="Product Image 1" />
<img className='hidden sm:hidden md:hidden lg:block max-w-full h-auto -mt-12' 
    src={zx9des} alt="Product Image 1" />


    <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-end text-center'>
      <h4 className='text-black text-sm font-bold'>SPEAKERS</h4>
      <div className='flex flex-row items-center justify-center'>
        <p className='mr-2 text-gray-400 text-sm'>SHOP</p>
        <Link to='/Speakers'>
          <MdOutlineNavigateNext className='text-orange-700' />
        </Link>
      </div>
    </div>
  </div>
</div>

      
<div className='relative max-w-xs  bg-white mt-20 mb-20 '>
  <div className='border rounded-lg overflow-hidden relative'>
    <img className='md:hidden lg:hidden max-w-full h-auto 
    -mt-12' src={yx1} alt="Product Image 1" />
 <img className='hidden sm:hidden lg:hidden md:block max-w-full h-auto 
    -mt-12' src={yx1tb} alt="Product Image 1" />
 <img className='hidden sm:hidden md:hidden lg:block max-w-full h-auto 
    -mt-12' src={yx1des} alt="Product Image 1" />

    <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-end text-center'>
      <h4 className='text-black text-sm font-bold'>EARPHONES</h4>
      <div className='flex flex-row items-center justify-center'>
        <p className='mr-2 text-gray-400 text-sm'>SHOP</p>
        <Link to='/Earphones'>
          <MdOutlineNavigateNext className='text-orange-700' />
        </Link>
      </div>
    </div>
  </div>
</div>
</div>


      
      
  
  <div className='bg-orange-main w-80 md:w-3/4 flex text-center 
  justify-center border rounded-lg flex flex-col mx-auto '>
    <div className='md: flex items-center justify-center overflow-y-hidden'>
  <img className='h-45 w-40 mb-7 flex items-center justify-center mt-9' src={zx9sp}/>
  </div>
  <div className='flex flex-col items-center justify-center'>
  <h1 className='text-white font-semibold mb-7 text-4xl md:text-6xl'>ZX9 SPEAKER</h1>
  <p className='text-white mb-7'>upgrade to premium speakers that are <br/>
  phenominally built to deliver truly <br/> remarkable sound.</p>
  <Link to='/zx9'>
  <button className='bg-black text-white mb-9 py-2 px-5 border-none '>
    <span className='text-white font-bold text-sm'>SEE PRODUCT</span>
  </button>
  </Link>
  </div>
  </div>

  <div className='md:hidden mt-20 mb-30 relative border rounded-lg w-80 mx-auto'>
    <img src={zzx9} className='md:hidden border rounded-lg '/>
    <div className='absolute top-0  mt-7'>
     <h1 className='text-3xl text-black font-bold mb-4 p-4'>ZX7 SPEAKER</h1>
     <Link to ='/zx7'>
     <button className='p-3 px-3 text-black border border-black  hover:bg-black hover:text-white shadow-lg'>
      <span className='text-sm   font-bold'>SEE PRODUCT</span>
     </button>
     </Link>
    </div>
  </div>

  <div className='hidden sm:hidden lg:hidden md:block 
  mt-20 mb-30 relative flex items-center w-3/4 mx-auto'>
    <img src={zx7md} className='sm:hidden lg:hidden md:block border rounded-lg' />
    <div className='absolute top-0 mt-7'>
        <h1 className='sm:hidden lg:hidden md:block text-3xl text-black font-bold mb-4 p-4'>ZX7 SPEAKER</h1>
        <Link to='/zx7'>
            <button className='p-3 px-3 text-black border border-black  hover:bg-black hover:text-white shadow-lg'>
                <span className='text-sm font-bold'>SEE PRODUCT</span>
            </button>
        </Link>
    </div>
</div>

<div className='hidden sm:hidden md:hidden  lg:block mt-20 mb-30 relative w-3/4 mx-auto'>
    <img src={zx7lg} className='md:hidden sm:hidden lg:block border rounded-lg  flex justify-center' />
    <div className='absolute top-0 mt-7'>
        <h1 className='text-3xl text-black font-bold mb-4 p-4'>ZX7 SPEAKER</h1>
        <Link to='/zx7'>
            <button className='p-3 px-3 text-black border border-black  hover:bg-black hover:text-white shadow-lg'>
                <span className='text-sm font-bold'>SEE PRODUCT</span>
            </button>
        </Link>
    </div>
</div>
<div className='lg:flex items-center justify-around md:flex '>

  <div className='mt-20 mb-30 lg:flex items-center
   lg:gap-3 md:flex md:w-3/4 mx-auto md:items-center md:gap-3'>
   <img src={yx1md} style={{width:'50%'}} className='hidden sm:hidden lg:hidden md:block  border rounded-lg'/>
   <img src={yx1lg}className='hidden sm:hidden md:hidden lg:block w-1/2 border rounded-lg'/>
    <img className='w-80 mx-auto md:hidden sm:w-full lg:hidden border rounded-lg' src={yx1er} alt="Product Image" />
    <div className='w-80 mx-auto  py-9 border rounded-lg bg-gray-200 mt-5 justify-center md:py-9 md:w-1/2 lg:w-full lg:py-12 lg:ml-0 lg:mt-0 lg:mb-0 '>
      <h1 className='text-3xl lg:text-4xl md:text-4xl text-black mt-4 mb-8 font-bold'>YX1 EARPHONES</h1>
      <Link to='/yx1'>
        <button className='border border-black mb-6 text-black p-3 rounded hover:bg-black hover:text-white'>
          <span className='text-sm font-bold'>SEE PRODUCT</span>
        </button>
      </Link>
    </div>
  </div>

</div>


</div>

  </div>


  
);
}

export default Items
