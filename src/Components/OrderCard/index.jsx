import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';

function OrderCard(productData) {
    const { img, name, price} = productData;

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
            <XMarkIcon className='relative right-0 w-6 h-6 hover:bg-red-600 cursor-pointer hover:text-white transition-all duration-300 rounded-lg z-50'/>
        </div>
    </div>
  )
}

export default OrderCard