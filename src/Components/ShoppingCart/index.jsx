import React, { useContext }  from 'react';
import "./index.css";
import { XMarkIcon } from '@heroicons/react/24/solid';
import {Context} from "../../Context";
import OrderCard from '../OrderCard';

function ShoppingCart() {
    const {openCartAside, setOpenCartAside, cartProducts, setCounter, counter} = useContext(Context);
  return (

    <aside className={`flex flex-col cart-detail fixed right-0 bg-white border border-black rounded-lg top-20 ${!openCartAside && "hidden"}`}>
        <div className='flex justify-between items-center p-6'>
            <h2>My order</h2>
            <div>
            <XMarkIcon className='absolute right-3 top-2 w-6 h-6 hover:bg-red-600 cursor-pointer hover:text-white transition-all duration-300 rounded-lg z-50' onClick={()=>setOpenCartAside(false)}/>
            </div>
        </div>

        {cartProducts.map(product =>{
              return <OrderCard 
            key={product.id}
            name={product.name}
            img={product.img}
            price={product.price}
            />
        })}
    </aside>
  )
}

export default ShoppingCart