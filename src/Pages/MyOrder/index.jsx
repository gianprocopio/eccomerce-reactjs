import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../Components/Layout';
import { Context } from '../../Context';
import OrderCard from '../../Components/OrderCard';
import {ArrowLeftIcon} from "@heroicons/react/24/solid";

function MyOrder() {
  const {order} = useContext(Context);
  const currentPath = location.pathname;
  let orderID = currentPath.split('/')[2];
  if(orderID === "last") orderID = order?.length - 1;

  return (
    <Layout>
      <div className='flex items-center justify-center p-6 w-80 relative'>
        <Link to="/my-orders" className='absolute left-0'>
      <ArrowLeftIcon className='w-6 h-6 cursor-pointer'/>
        </Link>
      <h2 className='text-xl font-medium mb-3'>My order</h2>
        </div>
      <div className='flex flex-col w-80'>
          {order.length == 0 && <h2 className='text-center font-medium'>No Items</h2>}

        {order && order[orderID]?.products.map(item =>{
          return <OrderCard 
          key={item.id}
          name={item.name}
          img={item.img}
          price={item.price}
          id={item.id}
          />
        })}
        <p className='text-center font-light'>{order.slice(-1)[0].date}</p>
        </div>
    </Layout>
  )
}

export default MyOrder