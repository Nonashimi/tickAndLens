import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {NavLink, useNavigate} from "react-router-dom"
import { fetchProduct } from '../redux/slices/productSlice';
const ProductItem = ({ image, title, price, id}) => {
  const navigate = useNavigate();
 
  return (
    <div onClick={() => navigate(`${id}`)}>
         <div className="flex flex-col items-center w-full gap-[40px]">
            <img src={image} alt={title} />
            <div className="w-full flex flex-col items-center w-full gap-[20px]">
                <div className="text-[25px]">{title}</div>
                    <div className="flex items-center w-full text-[25px] gap-[10%] after:content-[''] after:w-[30%] after:h-[2px] after:bg-black before:content-[''] before:w-[30%] before:h-[2px] before:bg-black">
                    ${price}
                </div>
            </div>
        </div>
    </div>
   
  );
};

export default ProductItem;
