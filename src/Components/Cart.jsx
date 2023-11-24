
import React from 'react';

const Cart = ({ cart, incrementAction, decrementAction }) => {
  return (
    <div className='flex justify-between items-start'>
      <div className='w-full flex gap-x-3 justify-between items-start'>
        <div className='!w-[64px] h-[64px] bg-[#F1F1F1] rounded flex justify-center items-center'>
          <img src={`/assets/cart/image-${cart?.slug}.jpg`} alt='cart image' width={40} height={40} />
        </div>

        <div className='w-full flex flex-col justify-start items-start gap-y-2 text-left'>
          <p className='text-[15px] text-ellipsis text-black uppercase font-bold'>
            {cart?.name}
          </p>
          <p className='text-[14px] text-black opacity-50'>
            {`$ ${cart?.price * cart?.qty}`}
          </p>
        </div>
      </div>

      <div className='!w-[120px] h-[48px] flex justify-center items-center'>
        
        <button
          className='w-auto h-auto px-2 bg-[#F1F1F1] border-0 text-black hover:bg-[#F1F1F1] hover:text-[#D87D4A]'
          onClick={decrementAction}
        >
          -
        </button>

        <input
          type='text'
          value={cart?.qty}
          readOnly
          className='w-full bg-[#F1F1F1] text-black text-center border-0 outline-none hover:text-black hover:bg-[#F1F1F1]'
        />

        <button
          className='w-auto h-auto px-2 bg-[#F1F1F1] border-0 text-black hover:bg-[#F1F1F1] hover:text-[#D87D4A]'
          onClick={incrementAction}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Cart;
