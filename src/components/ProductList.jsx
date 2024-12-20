import React from 'react'
import ProductItem from './ProductItem'
import glasses from "../assets/glasses1.png";

const ProductList = () => {
    const arr = [1,1,1];
  return (
    <div className='grid grid-cols-3 gap-[50px]'>
        {arr.map(a =>
        <ProductItem image = {glasses} title = {"Aviator Sunglasses"} price = {"89.99"}/>
        )}
    </div>
  )
}

export default ProductList