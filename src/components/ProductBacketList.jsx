import React, { useEffect } from 'react'
import ProductBacketItem from './ProductBacketItem'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBasket, removeFromBasket } from '../redux/slices/backetSlice';

const ProductBacketList = () => {

  const g = useSelector(state => state.backet.basket);

  console.log(g);

  const backet = useSelector(state => state.backet.basket).items;
  const dispatch = useDispatch();
  const fetchBasketView = async() =>{
    await dispatch(fetchBasket());
  }
  const deleteFromBasket = async(id) =>{
    await dispatch(removeFromBasket({id: id}));
}
  useEffect(() =>{
    fetchBasketView();
  },[dispatch]);


  return (
    <div>
        {backet && backet.map(product =>
            <ProductBacketItem clickRemove = {() => deleteFromBasket(product.productId)}  key = {product.productId} product = {product}/>
        )}
    </div>
  )
}

export default ProductBacketList