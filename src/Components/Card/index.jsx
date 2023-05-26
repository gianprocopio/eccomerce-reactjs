import React from 'react';
import { useContext } from 'react';
import { Context } from '../../Context';
import { PlusIcon } from '@heroicons/react/24/solid';
import { CheckIcon } from '@heroicons/react/24/solid';


function Card(data) {

  const {setOpen, setCartProducts, cartProducts, setOpenProductDetail, setCounter, counter, setOpenNotification, setOpenCartAside, addToCart, setProductCard} = useContext(Context);

  const renderIcon = (id)=>{
    const isInCart = cartProducts.filter(product => product.id === id).length > 0;

    if(isInCart){
      return (
        <div 
          className={`absolute top-0 right-0 flex justify-center items-center bg-green-500 w-6 h-6 rounded-full m-2 font-medium transition-all duration-300 text-white cursor-not-allowed ${addToCart ? "hidden": "block"}`} 
         >
        <CheckIcon className={`w-6 h-6`}/>
      </div>
      )
    }else{
      return (
      <div 
        className={`absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 font-medium hover:bg-cyan-600 transition-all duration-300 hover:text-white ${addToCart ? "hidden": "block"}`} 
        onClick={(event)=> addProductsToCart(event, data)}

       >
      <PlusIcon className={`w-6 h-6`}/>
    </div>
    )
    
    }

    
  }

  const showProduct = (productData)=>{
    setOpenProductDetail(true);
    setProductCard(productData)
    setOpenCartAside(false);
    setOpen(false)
  }

  const saveItemsLocalStorage = (newItems)=>{
    localStorage.setItem("PRODUCTS",JSON.stringify(newItems))
    setCartProducts(newItems)
  }

  const addProductsToCart = (event, productData)=>{
    event.stopPropagation();
    setCounter(counter + 1)
    saveItemsLocalStorage([...cartProducts, productData]);
    setOpenNotification(true);
    setTimeout(()=>{

      setOpenNotification(false);
    }, 2000)
    setOpenProductDetail(false);
  }

  

  return (
    <div 
    className={`bg-white cursor-pointer w-56 h-60 rounded-lg mx-auto mt-6`}
    onClick={()=> showProduct(data)}
    >
        <figure className='relative mb-2 w-full h-4/5'>
            <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{data.category}</span>
            <img className='w-full h-full object-cover rounded-lg' src={data.img} alt="product-img" />
            {renderIcon(data.id)}
        </figure>
        <p className='flex justify-between gap-2'>
            <span className='text-sm font-light'>{data.name}</span>
            <span className='text-lg font-medium'>${data.price}</span>
        </p>
    </div>
  )
}

export default Card