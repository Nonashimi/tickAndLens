import React, { useEffect } from 'react'
import ProductList from '../../components/ProductList';
import Colections from '../../components/Coolections';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsByCategoryAndBrand } from '../../redux/slices/productSlice';
const GlassesPage = () => {
  const items = useSelector(state => state.products.items)
  console.log(items);
  const dispatch = useDispatch();
  const fetchProducts = async() =>{
    await dispatch(fetchProductsByCategoryAndBrand());
  }
  useEffect(() =>{
    fetchProducts();
  },[dispatch]);
  return (
    <div>
      <Colections/>
        <ProductList items = {items}/>
    </div>
  )
}

export default GlassesPage