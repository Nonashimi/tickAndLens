import React from 'react'
import glasses from "../../assets/glasses1.png"
import MyButton from '../../UI/MyButton'
const ProductPage = () => {
  return (
    <div>
        <div className=" flex gap-[5%] items-center text-[#22333B]">
            <img src={glasses} alt="" />
            <div className="flex flex-col gap-[20px] items-start">
                <div className="text-[35px]">De Ville Trésor Watch</div>
                <div className="text-black text-[25px]">$89.99</div>
                <div className="w-[70%] text-[18px]">The Omega De Ville Trésor is a sophisticated, elegantly designed timepiece featuring a slim case, polished finish, and precision movement, perfect for those who appreciate timeless luxury and understated style.</div>
                <div className="flex flex-col gap-[10px]">
                    <div className="text-[20px]">Case Diameter</div>
                    <nav className='flex gap-[30px] no-underline'>
                        <li className='w-[40px] h-[40px] flex flex-col items-center justify-center bg-[#EEECEC] text-black'>S</li>
                        <li className='w-[40px] h-[40px] flex flex-col items-center justify-center bg-[#EEECEC] text-black'>M</li>
                        <li className='w-[40px] h-[40px] flex flex-col items-center justify-center bg-[#EEECEC] text-black'>L</li>

                    </nav>
                </div>
                <MyButton>Add To Card</MyButton>
            </div>
        </div>
    </div>
  )
}

export default ProductPage