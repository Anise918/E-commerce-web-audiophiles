import React from 'react'
import { Link } from 'react-router-dom'
import yx1ear from '/product-yx1-earphones/mobile/image-product.jpg'
import yx1 from '/product-yx1-earphones/tablet/image-product.jpg'
import zx9 from '/cart/product-zx9-speaker/mobile/image-category-page-preview.jpg'
import {MdOutlineNavigateNext} from 'react-icons/md'
import xx99mark1 from'/product-xx99-mark-one-headphones/mobile/image-product.jpg'


import yx1earmd from '/product-yx1-earphones/tablet/image-category-page-preview.jpg'
import yx1earlg from '/product-yx1-earphones/desktop/image-category-page-preview.jpg'


const Earphones = () => {
  return (
    <div>
      
      <h1 className='md:text-5xl py-6 uppercase text-4xl font-semibold bg-black text-center text-white'>
        Earphones</h1>
        <Link className='text-gray-500 mt-5 ' to ='/'>Go back</Link>
        <div className='w-3/4 mx-auto'>
        <div className='lg:flex items-center justify-evenly '>
        <div className=' flex justify-center'>
        <img src={yx1ear} className='md:hidden lg:hidden mt-10   '/>
        <img src={yx1earmd} className='hidden sm:hidden lg:hidden 
        md:block mt-10  '/>
        <img  src={yx1earlg} className='hidden sm:hidden 
        md:hidden lg:block mt-10 mx-5 '/>
    </div>
           <div className='flex flex-col items-center justify-center'>
            <h4  className='text-sm text-orange-600 text-center mt-5'>NEW PRODUCT</h4>
            <h1 className='lg:text-4xl font-semibold text-3xl text-center mt-5'>YX1 Wireless Earphones</h1>
            <p className=' justify-center text-black font-light  mt-5'>
              Tailor your listening experience with bespoke
              dynamic drives from the new YX1 Wireless 
              Earphones. Enjoy incredible high-fidelity sound
              even in noisy enviroments with its active
              noise cancellation feature.
            </p>
            <Link to='/yx1'>
           <button className=' hidden sm:hidden md:hidden 
           lg:block bg-orange-main py-2 px-5 text-white border mt-7'>
            SEE PRODUCT
           </button>
           </Link>
           </div>
           <div className='lg:hidden flex justify-center'>
            <Link to='/yx1'>
           <button className='bg-orange-main py-2 px-5 text-white border mt-7'>
            SEE PRODUCT
           </button>
           </Link>
            </div>
           
            </div>

            <div className='relative bg-white mt-40'>
              <div className='flex justify-center'>
        <img className='w-3/4 border rounded-lg -mt-20' src={xx99mark1} alt="Product Image 1" />
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
      <MdOutlineNavigateNext className='text-orange-500'/>
    </span>
    </div>
  </div>
</div>

            </div>
  )
}

export default Earphones