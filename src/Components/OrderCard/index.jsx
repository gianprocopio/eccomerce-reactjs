import React, {useContext} from 'react';
import { TrashIcon } from '@heroicons/react/24/solid';
import { Context } from '../../Context';

function OrderCard(productData) {
    const { img, name, price, id} = productData;
    const {cartProducts, setCartProducts, setCounter} = useContext(Context)

    const saveItemsLocalStorage = (newItems)=>{
        localStorage.setItem("PRODUCTS",JSON.stringify(newItems))
        setCartProducts(newItems)
    }

    const deleteItemsFromCart = (id)=>{
        const newCart = [...cartProducts];
        const itemIndex = newCart.findIndex(item => item.id === id);
        newCart.splice(itemIndex, 1);
        saveItemsLocalStorage(newCart);
        setCounter(newCart.length)
    }

  return (
    <div className='flex justify-between items-center border-t border-black py-1'>
        <div className='flex items-center gap-2'>
            <figure className='w-20 h-20'>
                <img className='w-full h-full rounded-lg object-cover' src={img} alt={name} />
            </figure>
            <p className='text-md font-light'>{name}</p>
        </div>
        <div className='flex items-center gap-3'>
            <p className='text-xl font-medium'>${price}</p>
            <TrashIcon className='relative right-0 w-6 h-6 cursor-pointer transition-all duration-300 rounded-lg z-50' onClick={()=> deleteItemsFromCart(id)}/>
        </div>
    </div>
  )
}

export default OrderCard