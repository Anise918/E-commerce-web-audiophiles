import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart} from 'react-icons/ai'
import { ImMenu } from 'react-icons/im'

import xxheadp from '/cart/home/mobile/image-header.jpg'

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);



    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    }
  
    const closeMenu = () => {
      setIsMenuOpen(false);
    };
  
  
  
  
  

  return (
    <div>
import { ImMenu } from 'react-icons/im';
import { AiOutlineShoppingCart } from 'react-icons/ai';

// ...

<div className="relative">
  {/* Image */}
  <img src={xxheadp} alt='Headphones' className='lg:hidden md:hidden w-full' />

  {/* Overlay with menu, text, and cart */}
  <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center text-white z-10">
    <ImMenu onClick={toggleMenu} className='cursor-pointer' />
    <p className='font-bold text-xl'>audiophile</p>
    <AiOutlineShoppingCart />
  </div>

  {/* Product information inside the image */}
  <div className='absolute inset-0 flex flex-col justify-center items-center text-center text-white p-10'>
    <h4 className='text-sm text-gray-500 tracking-widest'>NEW PRODUCT</h4>
    <h1 className='font-semibold mb-4 capitalize text-4xl'>XX99 Mark II <br/> Headphones</h1>
    <p className='text-sm mb-4'>
      Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
    </p>
    <Link to='/product'>
      <button className='bg-orange-main py-2 px-4 rounded text-white hover:bg-orange-600 text-lg font-semibold'>
        <span>SEE PRODUCT</span>
      </button>
    </Link>
  </div>
</div>


    </div>
  )
}

export default Header