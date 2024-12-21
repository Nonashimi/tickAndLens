import { useDispatch, useSelector } from "react-redux";
import { fetchProductsByCategoryAndBrand } from "../../redux/slices/productSlice";
import { useEffect } from "react";
import Collections from "../../components/Coolections";
import ProductList from "../../components/ProductList";

export const WatchPage = () =>{
    const items = useSelector(state => state.products.items)
    const dispatch = useDispatch();
    const fetchProducts = async() =>{
      await dispatch(fetchProductsByCategoryAndBrand({id: 1}));
    }
    useEffect(() =>{
      fetchProducts();
    },[dispatch]);
    return(
        <div className="">
            <Collections/>
            <ProductList items = {items}/>
        </div>
    )

}