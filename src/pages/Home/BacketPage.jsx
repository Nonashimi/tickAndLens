import React from 'react'
import ProductBacketList from '../../components/ProductBacketList'
import glasses from "../../assets/glasses1.png"
const BacketPage = () => {
    const products = [
        {
          id: 1,
          image: glasses, 
          brand: "MHS.SUN",
          name: "Elegant Gold Necklace",
          price: 189.99,
          quantity: 1,
        },
        {
          id: 2,
          image: glasses, 
          brand: "MHS.SUN",
          name: "White Gold Marquise",
          price: 189.99,
          quantity: 1,
        },
        {
          id: 3,
          image: glasses, 
          brand: "MHS.SUN",
          name: "Rose Gold Bracelet",
          price: 159.99,
          quantity: 1,
        },
        {
          id: 4,
          image: glasses, 
          brand: "MHS.SUN",
          name: "Platinum Diamond Ring",
          price: 299.99,
          quantity: 1,
        },
      ];      
  return (
    <div className="">
        <ProductBacketList products = {products}/>
    </div>
  )
}

export default BacketPage