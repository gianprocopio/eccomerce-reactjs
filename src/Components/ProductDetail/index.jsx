import React from 'react';
import "./index.css";
import { XMarkIcon } from '@heroicons/react/24/solid';
import {Context} from "../../Context";
import { useContext } from 'react';

function ProductDetail() {
  const {openProductDetail, setOpenProductDetail, productCard} = useContext(Context);

  return (
    <aside className={`flex flex-col cart-detail fixed right-0 bg-white border border-black rounded-lg top-20 h-4/5 scrollable-cards ${!openProductDetail && "hidden"}`}>
        <div className='flex justify-between items-center p-6'>
            <div>
            <XMarkIcon className='absolute right-3 top-2 w-6 h-6 hover:bg-red-600 cursor-pointer hover:text-white transition-all duration-300 rounded-lg z-50' onClick={()=>setOpenProductDetail(!openProductDetail)}/>

            </div>
        </div>
          <figure className='px-6'>
            <img 
              className='w-full h-72 object-cover rounded-lg' 
              src={productCard.img} alt={productCard.name} />
          </figure>
          <p className='flex flex-col p-6'>
            <span className='font-medium text-2xl'>${productCard.price}</span>
            <span className='font-medium text-md'>{productCard.name}</span>
            <span className='font-light text-sm'>{productCard.description}</span>
          </p>
    </aside>
  )
}

export default ProductDetail