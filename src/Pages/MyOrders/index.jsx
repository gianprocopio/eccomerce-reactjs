import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../Components/Layout';
import OrdersCard from '../../Components/OrdersCard';
import { Context } from '../../Context';
import {ArrowLeftIcon} from "@heroicons/react/24/solid";

function MyOrders() {

  const {order, setOrder} = useContext(Context);

  const saveItemsLocalStorage = (newItems)=>{
    localStorage.setItem("ORDERS",JSON.stringify(newItems))
    setOrder(newItems)
}

const cleanOrdersRegister = ()=>{
  saveItemsLocalStorage([])
}
  return (
    <Layout>
      <div className='flex items-center justify-center p-6 w-80 relative'>
        <Link to="/" className='absolute left-0'>
      <ArrowLeftIcon className='w-6 h-6 cursor-pointer'/>
        </Link>
      <h2 className='font-medium text-xl'>My orders</h2>
      </div>
      {order.length === 0 && <h2 className='mb-7 font-light'>No orders</h2>}
      {
        order.length > 0 && order.map((order, index) =>(
          <Link 
          to={`/my-orders/${index}`}
          key={index}
          >
          <OrdersCard
          totalPrice={order.totalPrice}
          totalProducts={order.totalProducts}
          />
          </Link>
        ))
      }

      <button className={`bg-black text-white font-medium w-20 h-8 border border-black hover:text-black hover:bg-white transition-all duration-300 ${order.length > 0 ? "block": "hidden"}`} onClick={()=> cleanOrdersRegister()}>Clean</button>
    </Layout>
    )
}

export default MyOrders