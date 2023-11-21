import React from 'react'
import { Link } from 'react-router-dom'
import zx9 from '/cart/product-zx9-speaker/mobile/image-category-page-preview.jpg'

import zx9md from '/cart/product-zx9-speaker/tablet/image-category-page-preview.jpg'
import zx9lg from '/cart/product-zx9-speaker/desktop/image-category-page-preview.jpg'
import zx7spmd from '/cart/product-zx9-speaker/product-zx7-speaker/tablet/image-category-page-preview.jpg'
import zx7splg from '/cart/product-zx9-speaker/product-zx7-speaker/desktop/image-category-page-preview.jpg'

import zx7sp from '/cart/product-zx9-speaker/product-zx7-speaker/mobile/image-product.jpg'
import xx99mark1 from'/product-xx99-mark-one-headphones/mobile/image-product.jpg'
import yx1 from '/product-yx1-earphones/tablet/image-product.jpg'
import {MdOutlineNavigateNext} from 'react-icons/md'


const Speakers = () => {
  return (
    <div className=' '>
      
    <h1 className='bg-black py-7 text-white text-4xl text-center font-semibold '>
      SPEAKERS</h1>
      <Link className='text-black font-light mt-5 ' to ='/'>Go back</Link>
      <div className='w-3/4 mx-auto'>
      <div className='lg:flex items-center justify-around'>
      <div className='flex justify-center'>
      <img src={zx9} className='md:hidden lg:hidden   mt-5'/>
      <img  src={zx9md} className='hidden sm:hidden lg:hidden
      md:block   mt-5'/>
      <img style={{}} src={zx9lg} className='hidden sm:hidden md:hidden lg:block   mt-5'/>

      </div>
      <div className='flex flex-col items-center '>
        <h4 className='text-orange-700 text-sm mt-5'>NEW PRODUCT</h4>
        <h1 className='md:text-4xl text-black font-semibold text-3xl mt-5'>ZX9 Speaker</h1>
        <p className='text-black font-light mt-5 md:w-3/4   lg:ml-6'>Upgrade your sound system with the all new 
          ZX9 active speaker.It's a bookshelf
          speaker system that offers truly wireless
          connectivity-creating new possibilities for more
          pleasing and practical audio setups</p>

          <div className='hidden sm:hidden md:hidden lg:block flex justify-center'>
            <Link to='/zx9'>
          <button className='bg-orange-main border py-2 px-5  text-white mt-7'>
            <span>SEE PRODUCT</span>
          
          </button>
          </Link>
          </div>
          </div>
          <div className='lg:hidden flex justify-center'>
            <Link to='/zx9'>
          <button className='bg-orange-main border py-2 px-5 md:mb-7 text-white mt-7'>
            <span>SEE PRODUCT</span>
          
          </button>
          </Link>
          </div>
          </div>

          <div className='md:hidden lg:hidden flex justify-center'>
      <img src={zx7sp} className=' mt-5'/>
      </div>
      <div className='md:hidden lg:hidden flex flex-col items-center justify-center'>
        <h1 className='font-semibold text-3xl text-black mt-5'>ZX7 Speaker</h1>
        <p className='font-light '>
          Stream high quality sound wirelessly
          with minimal to no loss.The ZX7
          Speaker uses high end audiophile-components
          that represents the top of the line powered 
          speakers for home or studio use.
        </p>
        </div>
        <div className='flex justify-center'>
          <Link to='/zx7'>
        <button className='md:hidden lg:hidden bg-orange-main py-2 px-5 mt-7 text-white'>
          <span>SEE PRODUCT</span>
        </button>
        </Link>
        </div>
       
       <div className=' '>
       <div className='hidden sm:hidden md:block flex flex-col items-center justify-center'>
  <div className='flex items-center justify-center '>
    <img src={zx7spmd} className='lg:hidden md:block  mt-5' />
    
  </div>
  <div className='lg:hidden  flex flex-col justify-center items-center w-3/4'>
    <h1 className='font-semibold text-3xl items-center text-black mt-5 md:mb-5'>ZX7 Speaker</h1>
    <p className='text-black font-light  w-full  justify-center'>
      Stream high-quality sound wirelessly with minimal to no loss. The ZX7 Speaker uses high-end audiophile components that represent the top of the line powered speakers for home or studio use.
    </p>
    <div className='flex justify-center mt-7'>
      <Link to='/zx7'>
        <button className='bg-orange-main py-2 px-5 text-white'>
          <span>SEE PRODUCT</span>
        </button>
      </Link>
    </div>
  </div>
</div>

       </div>
      
       <div className='flex flex-row mb-10 justify-evenly items-center'>
  
  <div className='hidden sm:hidden md:hidden lg:block   items-center '>
    <h1 className='font-semibold text-3xl text-black mt-5 md:mb-5'>ZX7 Speaker</h1>
    <p className='text-black font-light   w-3/4'>
      Stream high-quality sound wirelessly with minimal to no loss. The ZX7 Speaker uses high-end audiophile components that represent the top of the line powered speakers for home or studio use.
    </p>
    <div className='flex mt-7 justify-center'>
      <Link to='/zx7'>
        <button className='bg-orange-main py-2 px-5 text-white'>
          <span>SEE PRODUCT</span>
        </button>
      </Link>
    </div>
  </div>

  
  <div>
    <img src={zx7splg} className='hidden sm:hidden md:hidden lg:block  mt-10' />
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
      
    </div>
  )
}

export default Speakers