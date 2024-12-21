import React from 'react';
import glasses from "../assets/glasses1.png";
const ProductBasketItem = ({ product, clickRemove}) => {
  return (
    <div className='grid grid-cols-[200px,3fr,2fr,1fr,1fr] gap-8 items-center p-4 border-b'>
      {/* Product Image */}
      <img
        src={glasses}
        alt={product.productName}
        className='w-[200px] h-auto object-cover'
      />
      
      {/* Product Name */}
      <div className="text-lg font-medium">{product.productName}</div>
      
      {/* Quantity Controls */}
      <div className="flex items-center">
        <button
          className="w-10 h-10 flex justify-center items-center bg-[#22333B] text-white cursor-pointer rounded-l"
        >
          -
        </button>
        <div className="w-10 h-10 flex justify-center items-center bg-white text-[#22333B] border-y border-[#000]">
          {product.quantity}
        </div>
        <button
          className="w-10 h-10 flex justify-center items-center bg-[#22333B] text-white cursor-pointer rounded-r"
        >
          +
        </button>
      </div>
      
      {/* Product Price */}
      <div className="text-lg font-semibold">${product.price.toFixed(2)}</div>
      
      {/* Remove Button */}
      <button
      onClick={clickRemove}
        className="text-red-500 hover:text-red-700 font-bold"
      >
        X
      </button>
    </div>
  );
};

export default ProductBasketItem;
