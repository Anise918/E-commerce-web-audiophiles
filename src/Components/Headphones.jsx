import React from 'react'
import { Link } from 'react-router-dom'

import XX99Mark2 from '/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg'
import XX99Mark2md from '/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg'
import XX99Mark2lg from '/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg'


import xx99mark1 from'/product-xx99-mark-one-headphones/mobile/image-product.jpg'
import xx99mark1md from'/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg'
import xx99mark1lg from'/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg'

import xx59Head from '/product-xx59-headphones/mobile/image-product.jpg'
import xx59Headmd from '/product-xx59-headphones/tablet/image-category-page-preview.jpg'
import xx59Headlg from '/product-xx59-headphones/desktop/image-category-page-preview.jpg'

import yx1 from '/product-yx1-earphones/mobile/image-product.jpg'
import zx9 from '/cart/product-zx9-speaker/mobile/image-category-page-preview.jpg'
import xx99mark1tb from'/product-xx99-mark-one-headphones/tablet/image-product.jpg'
import xx99mark1des from'/product-xx99-mark-one-headphones/desktop/image-product.jpg'

import zx9tb from '/cart/product-zx9-speaker/tablet/image-product.jpg'
import zx9des from '/cart/product-zx9-speaker/desktop/image-product.jpg'

import yx1tb from '/product-yx1-earphones/tablet/image-product.jpg'
import yx1des from '/product-yx1-earphones/desktop/image-product.jpg'

import {MdOutlineNavigateNext} from 'react-icons/md'

const Headphones = () => {
  return (
    <div>
      
        <h1 className='bg-black text-white py-7 text-3xl 
        uppercase flex justify-center  font-semibold  top-0'>Headphones</h1>
        <Link className='text-gray-500 mt-5 ' to ='/'>Go back</Link>
        <div className='w-3/4 mx-auto'>
        <div className='flex justify-center'>
        <img src={XX99Mark2} className='md:hidden lg:hidden mt-10 
        flex justify-center '/>
        <img src={XX99Mark2md} className='hidden sm:hidden lg:hidden md:block'/>
        </div>
        <div className='lg:hidden flex flex-col justify-center items-center'>
          <h4 className='text-orange-700 text-sm mt-5'>NEW PRODUCT</h4>
          <h1 className='text-black font-semibold text-3xl mt-5 
          text-center flex justify-center '>XX99 Mark II<br/> Headphones</h1>
          <p className='font-light  flex justify-center mt-5'>The new xx99 Mark II headphones is the pinnacle of pristine audio. 
      It redefines your premium headphone experience by reproducing the balanced depth and precision of
      studio-quality sound.</p>
      <Link to='/product'>
      <button className='bg-orange-main py-2 px-5 text-white mt-6'>
        <span>SEE PRODUCT</span>
      </button>
      </Link>
     </div>

    <div className='flex mt-10 space-x-9 mb-10'>
     <div>
      <img src={XX99Mark2lg} className='hidden sm:hidden md:hidden lg:block'/>
     </div>
     <div className='hidden sm:hidden md:hidden lg:block flex flex-col mr-7 justify-center items-center'>
          <h4 className='text-orange-700 text-sm mt-5 '>NEW PRODUCT</h4>
          <h1 className='text-black font-semibold text-3xl mt-5 
            '>XX99 Mark II<br/> Headphones</h1>
          <p className='font-light  justify-center mt-5'>The new xx99 Mark II headphones is the pinnacle of pristine audio. 
      It redefines your premium headphone experience by reproducing the balanced depth and precision of
      studio-quality sound.</p>
      <Link to='/product'>
      <button className='bg-orange-main py-2 px-5 text-white mt-6'>
        <span>SEE PRODUCT</span>
      </button>
      </Link>
     </div>
    </div>


      
        <div className='flex justify-center'>
        <img className='md:hidden lg:hidden  border rounded-lg mt-5' src={xx99mark1}/>
        <img src={xx99mark1md} className='hidden sm:hidden lg:hidden md:block'/>
        </div>
        <div className='lg:hidden flex flex-col text-center justify-center'>
          <h1 className='mt-5 text-3xl text-black font-semibold'>XX99 Mark I<br/> Headphones</h1>
          <p className='font-light mt-5'>As the gold standard for headphones,
             The classic XX99 Mark I offers detailed 
             and accurate audio reproduction for audiophiles,
             mixing engineers and music aficionados alike in studios and 
             on the go.
          </p>
          </div>
          <div className='lg:hidden flex justify-center mt-7'>
            <Link to='/X99mark1'>
          <button className='text-white border py-2 px-5 bg-orange-main'>
            SEE PRODUCT</button>
            </Link>
          </div>


           <div className='flex space-x-9 mb-10'>
          <div className='hidden sm:hidden md:hidden lg:block flex flex-col justify-center'>
          <h1 className='mt-5 text-3xl text-black font-semibold'>XX99 Mark I<br/> Headphones</h1>
          <p className='font-light mt-5'>As the gold standard for headphones,
             The classic XX99 Mark I offers detailed 
             and accurate audio reproduction for audiophiles,
             mixing engineers and music aficionados alike in studios and 
             on the go.
          </p>
          
          <div className='hidden sm:hidden md:hidden lg:block flex justify-center mt-7'>
            <Link to='/X99mark1'>
          <button className='text-white border py-2 px-5 bg-orange-main'>
            SEE PRODUCT</button>
            </Link>
            </div>
          </div>
         <div>
          <img src={xx99mark1lg} className='hidden sm:hidden md:hidden lg:block'/>
         </div>
        </div>


          <div className='flex justify-center'>
          <img src={xx59Head} className='md:hidden lg:hidden mt-5'/>
          <img src={xx59Headmd} className='hidden sm:hidden lg:hidden md:block'/>
          </div>
          <div className='lg:hidden'>
            <h1 className=' flex justify-center text-black 
            font-semibold text-3xl mt-5'> XX59 Headphones</h1>
            <p className='font-light text-center flex justify-center mt-5'>
              Enjoy your audio almost anywhere
              and customize it to your specific tastes
              with the XX59 Headphones. 
              The stylish yet durable versatile wireless headset
              is a brilliant companion at home or on the move.
            </p>
            <div className='flex justify-center'>
              <Link to='/x59'>
            <button className='bg-orange-main text-white py-2 px-5 border mt-7 '>
              SEE PRODUCT</button>
              </Link>
              </div>
          </div>

        <div className='flex flex-row space-x-9'>
         <div>
         <img src={xx59Headlg} className='hidden sm:hidden md:hidden lg:block mb-10'/>

         </div>
         <div className='hidden sm:hidden md:hidden lg:block  mb-10'>
            <h1 className=' flex justify-center text-black 
            font-semibold text-3xl mt-5'> XX59 Headphones</h1>
            <p className='font-light  flex justify-center mt-5'>
              Enjoy your audio almost anywhere
              and customize it to your specific tastes
              with the XX59 Headphones. 
              The stylish yet durable versatile wireless headset
              is a brilliant companion at home or on the move.
            </p>
            <div className='flex justify-center'>
              <Link to='/x59'>
            <button className='bg-orange-main text-white py-2 px-5 border mt-7 '>
              SEE PRODUCT</button>
              </Link>
              </div>
          </div>
           </div>
        </div>

        <div className=' md:flex md:w-3/4 mx-auto gap-3'>

<div className='relative max-w-xs mx-auto bg-white mt-20 w-3/4 mx-auto'>
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




<div className='relative max-w-xs mx-auto bg-white mt-20 w-3/4 mx-auto'>
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

 
<div className='relative max-w-xs mx-auto bg-white mt-20 mb-20 w-3/4 mx-auto'>
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








          
    </div>
  )
}

export default Headphones