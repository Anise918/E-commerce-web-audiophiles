
import React, { useState, useEffect } from 'react';
import Cart from './Cart';

const CartCard = ({ modalState, cartItems }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Update the cart when cartItems prop changes
    if (cartItems) {
      setCart(cartItems);
    }
  }, [cartItems]);

  const handleRemoveAll = () => {
    // Your logic for removing all items from the cart
    setCart([]);
  };

  const handleIncrement = (index) => {
    // Your logic for incrementing the quantity of an item
    const updatedCart = [...cart];
    updatedCart[index].qty += 1;
    setCart(updatedCart);
  };

  const handleDecrement = (index) => {
    // Your logic for decrementing the quantity of an item
    const updatedCart = [...cart];
    if (updatedCart[index].qty > 1) {
      updatedCart[index].qty -= 1;
      setCart(updatedCart);
    }
  };

  const handleAction = () => {
    // Logic for handling the action
    // Redirect to checkout page or perform other actions
  };

  return (
    <div className={`${modalState.isCartOpen ? 'block' : 'hidden'} w-full h-full fixed 
    left-0 top-16 right-0 flex items-start justify-start z-20`}>
      <div className="relative w-full h-auto p-5 flex flex-row-reverse z-50">
        {/* Modal Content */}
        {cart.length === 0 ? (
          <div className='relative lg:right-32 p-10 bg-white max-w-[377px] rounded-lg shadow'>
            <p className='text-black opacity-50'>Cart is empty</p>
          </div>
        ) : (
          <div className="relative bg-white max-w-[377px] rounded-lg shadow">
            {/* Modal header lg:right-32*/}
            <div className="flex items-start justify-between p-4 border-b rounded-t">
              <h3 className="text-xl uppercase font-semibold text-gray-900">
                Cart ({cart.length})
              </h3>
              <button
                type='button'
                onClick={handleRemoveAll}
                className='text-[15px] text-black opacity-50'
              >
                Remove all
              </button>
            </div>
            {/* Modal body */}
            <div className="p-6 space-y-6 max-h-80">
              {/* Cart list block */}
              {cart.map((item, index) => (
                <Cart
                  key={index}
                  cart={item}
                  incrementAction={() => handleIncrement(index)}
                  decrementAction={() => handleDecrement(index)}
                />
              ))}
            </div>
            {/* Modal footer */}
            <div className='flex flex-col p-6 mb-5 space-y-6 gap-2'>
              <div className='flex justify-between items-center'>
                <p className='uppercase text-black opacity-50'>Total</p>
                <p className='text-[#D87D4A]'>$ {cart.reduce((total, item) => {
                  return total + (parseInt(item.qty) * parseInt(item.price))
                }, 0)}
                </p>
              </div>
              <button
                className='w-full mt-3 p-2'
                onClick={handleAction}
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartCard;
