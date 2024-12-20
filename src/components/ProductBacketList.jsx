import React from 'react'
import ProductBacketItem from './ProductBacketItem'

const ProductBacketList = ({products}) => {
  return (
    <div>
        {products.map(product =>
            <ProductBacketItem key = {product.id} product = {product}/>
        )}
    </div>
  )
}

export default ProductBacketList