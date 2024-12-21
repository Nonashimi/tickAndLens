import React from 'react'
import ProductItem from './ProductItem'
import glasses from "../assets/glasses1.png";

const ProductList = ({items}) => {
    const data = items.content;
  return (
    <div className='grid grid-cols-3 gap-[50px]'>
      {data &&  data.map(a =>
        <ProductItem key = {a.id} image = {glasses} title = {a.name} price = {a.price} id = {a.id}/>
        )}
       
    </div>
  )
}

export default ProductList