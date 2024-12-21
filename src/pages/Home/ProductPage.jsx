import React, { useEffect, useState } from 'react'
import glasses from "../../assets/glasses1.png"
import MyButton from '../../UI/MyButton'
import { useDispatch, useSelector } from 'react-redux'
import { addToBasket, fetchBasket, removeFromBasket } from '../../redux/slices/backetSlice'
import { fetchProduct } from '../../redux/slices/productSlice'
import { useLocation } from 'react-router'
const ProductPage = () => {
    const product = useSelector(state => state.products.product);
    const basket = useSelector(state => state.backet.basket);
    const location = useLocation();
    const dispatch = useDispatch();
    const id = location.pathname.split("/")[3];
    const [isInBasket, setIsInBasket] = useState(false);
    useEffect(() =>{
        if(basket && basket.items){
            for(let i = 0; i < basket.items.length; i++){
                if(basket.items[i].productId == id)
                     setIsInBasket(true); return;
            }
            setIsInBasket(false);return;
        }
       setIsInBasket(false);
    }, []);





   const fetchItemById = async() =>{
    await dispatch(fetchProduct(id));
    await dispatch(fetchBasket());
  }

  useEffect(() =>{
    fetchItemById();
  }, [dispatch]);

    const AddBasket = () =>{
        setIsInBasket(true);
         dispatch(addToBasket({id: product.id, quantity: 1}));
    }
    const deleteFromBasket = () =>{
        setIsInBasket(false);
        dispatch(removeFromBasket({id: product.id}));
    }
    
  return (
    <div>
        <h1>{product.id}</h1>
        <div className=" flex gap-[5%] items-center text-[#22333B]">
            <img src={glasses} alt="" />
            <div className="flex flex-col gap-[20px] items-start">
                <div className="text-[35px]">{product.name}</div>
                <div className="text-black text-[25px]">${product.price}</div>
                <div className="w-[70%] text-[18px]">{product.description}</div>
                <div className="flex flex-col gap-[10px]">
                    <div className="text-[20px]">Case Diameter</div>
                    <nav className='flex gap-[30px] no-underline'>
                        <li className='w-[40px] h-[40px] flex flex-col items-center justify-center bg-[#EEECEC] text-black'>S</li>
                        <li className='w-[40px] h-[40px] flex flex-col items-center justify-center bg-[#EEECEC] text-black'>M</li>
                        <li className='w-[40px] h-[40px] flex flex-col items-center justify-center bg-[#EEECEC] text-black'>L</li>

                    </nav>
                </div>
                {isInBasket?<button onClick={deleteFromBasket} className='bg-[#fff] border border-[#22333B] text-[#22333B] py-2 px-10 uppercase'>In Basket</button>:
                    <MyButton onClick = {AddBasket}>Add To Card</MyButton>
                }
            </div>
        </div>
    </div>
  )
}

export default ProductPage