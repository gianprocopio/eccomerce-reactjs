import React, {useContext} from 'react';
import { Context } from '../../Context';

function OrdersCard(productData) {
    const { totalPrice, totalProducts } = productData;
    const {cartProducts, setCartProducts, setCounter} = useContext(Context)

    const saveItemsLocalStorage = (newItems)=>{
        localStorage.setItem("PRODUCTS",JSON.stringify(newItems))
        setCartProducts(newItems)
    }

    const date = new Date();


  return (
    <div className='flex justify-between items-center mb-3 border border-black p-3'>
            <span>{date.toLocaleDateString()}</span>
            <span>{totalProducts}</span>
            <span>${totalPrice}</span>
    </div>
    
  )
}

export default OrdersCard