import React, {useContext} from 'react';
import { Context } from '../../Context';
import {ChevronRightIcon} from "@heroicons/react/24/solid";
import {CalendarDaysIcon} from "@heroicons/react/24/solid";
import {ShoppingBagIcon} from "@heroicons/react/24/solid";

function OrdersCard(productData) {
    const { totalPrice, totalProducts } = productData;
    const {cartProducts, setCartProducts, setCounter} = useContext(Context)

    const saveItemsLocalStorage = (newItems)=>{
        localStorage.setItem("PRODUCTS",JSON.stringify(newItems))
        setCartProducts(newItems)
    }

    const date = new Date();


  return (
    <div className='flex justify-between items-center mb-3 border border-black rounded-lg p-4 w-80'>
      <p className='flex justify-between w-full'>
        <div className='flex flex-col'>
          <p className='flex gap-2'>
            <CalendarDaysIcon className='w-5 h-5'/>
            <span className='font-light'>{date.toLocaleDateString()}</span>
          </p>
          <p className='flex gap-2'>
            <ShoppingBagIcon className='w-5 h-5'/>
            <span className='font-light'>{totalProducts} product (s)</span>
          </p>
        </div>
        <p className='flex items-center justify-center gap-2'>

            <span className='font-medium text-2xl'>${totalPrice}</span>
            <ChevronRightIcon className='w-6 h-6'/>
        </p>
      </p>
    </div>
    
  )
}

export default OrdersCard