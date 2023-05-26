import React, { useContext }  from 'react';
import {Link} from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/24/solid';
import {Context} from "../../Context";
import {totalPrice} from "../../Utils"
import OrderCard from '../OrderCard';
import "./index.css";

function ShoppingCart() {
    const {openCartAside, setOpenCartAside, cartProducts, setOrder, order, setCartProducts, setCounter} = useContext(Context);

    const saveItemsLocalStorage = (newItems, itemName, setter)=>{
      localStorage.setItem(itemName,JSON.stringify(newItems))
      setter(newItems)
  }

    const checkOut = ()=>{
      const date = new Date();
      const orderToAdd = {
        date: date.toLocaleDateString(),
        products: cartProducts,
        totalProducts: cartProducts.length,
        totalPrice: totalPrice(cartProducts)
      }
      saveItemsLocalStorage([], "PRODUCTS", setCartProducts);
      setOpenCartAside(false)
      saveItemsLocalStorage([...order, orderToAdd], "ORDERS", setOrder)
      setCounter(0)
    }

  return (

    <aside className={`flex flex-col fixed bg-white border border-black rounded-lg top-20 right-0 transition-all duration-300 w-80 ${!openCartAside && "right-[-1000px]"}`}>
        <div className='flex justify-between items-center p-6'>
            <h2>My order</h2>
            <div>
            <XMarkIcon className='absolute right-3 top-2 w-6 h-6 hover:bg-red-600 cursor-pointer hover:text-white transition-all duration-300 rounded-lg z-50' onClick={()=>setOpenCartAside(false)}/>
            </div>
        </div>
        <div className='overflow-y-scroll shopping-cart'>
          {cartProducts.length == 0 && <h2 className='text-center font-medium'>No Items</h2>}

        {cartProducts && cartProducts.map(product =>{
              return <OrderCard 
            key={product.id}
            name={product.name}
            img={product.img}
            price={product.price}
            id={product.id}
            buttonDelete={true}
            />
        })}
        </div>

        <div className='px-6'>
        <p className='flex justify-between pb-3'>
          <span className='font-medium text-lg'>Total:</span>
          <span className='font-bold text-xl'>${totalPrice(cartProducts)}</span>
        </p>
        <Link
        to='/my-orders/last'
        >
        <button className='bg-black w-full text-white rounded-lg text-lg hover:border-black hover:border hover:bg-white hover:text-black font-medium my-2 p-1 transition-all duration-200' onClick={()=> checkOut()}>Checkout</button>
        </Link>
        </div>

    </aside>
  )
}

export default ShoppingCart