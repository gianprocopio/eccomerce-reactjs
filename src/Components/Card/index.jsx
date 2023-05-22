import React from 'react';
import { useContext } from 'react';
import { Context } from '../../Context';
import { PlusIcon } from '@heroicons/react/24/solid';


function Card({category, img, name, price, description}) {

  const context = useContext(Context);
  const {setOpenProductDetail} = useContext(Context);
  const {productCard,setProductCard} = useContext(Context);


  const showProduct = ()=>{
    setOpenProductDetail(true);
    setProductCard({
      category: category,
      img: img,
      name: name,
      price: price,
      description: description
    })
  }

  

  return (
    <div 
    className={`bg-white cursor-pointer w-56 h-60 rounded-lg mx-auto mt-6`}
    onClick={()=> showProduct() }
    >
        <figure className='relative mb-2 w-full h-4/5'>
            <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{category}</span>
            <img className='w-full h-full object-cover rounded-lg' src={img} alt="product-img" />
            <div 
            className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 font-medium hover:bg-cyan-600 transition-all duration-300 hover:text-white'
            onClick={()=>context.setCounter(context.counter + 1)}
            >
            <PlusIcon className="w-6 h-6"/>

            </div>
        </figure>
        <p className='flex justify-between gap-2'>
            <span className='text-sm font-light'>{name}</span>
            <span className='text-lg font-medium'>${price}</span>
        </p>
    </div>
  )
}

export default Card