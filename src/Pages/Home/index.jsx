import React, { useState, useContext} from 'react';
import Layout from '../../Components/Layout';
import Card from '../../Components/Card';
import Loader from '../../Components/Loader';
import ProductDetail from '../../Components/ProductDetail';
import { Context } from '../../Context';
import SignIn from '../SignIn';


function Home() {
  
  const {products, loading, authenticated} = useContext(Context);
  
  const Render = ()=>{
    if(authenticated){
      return (

        <Layout>

      <h1 className='font-medium text-xl'>What are you looking for?</h1>
      {!loading && <Loader/>}
      <div className='grid place-content-center lg:grid-cols-4 gap-3 mt-5 w-full max-w-screen-lg md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>

      {loading && products.map(product=>{         
          return<Card 
          key={product.id}
          name={product.title}
          category={product.category}
          img={product.image}
          price={product.price}
          description={product.description}
          id={product.id}
          />
      })}

      </div>

      <ProductDetail/>
    </Layout>
      )
    }
    else{
      return (
        <Layout>
          <SignIn/>
        </Layout>
      )
    }
  }

  return (
   <Render /> 
  )
}

export default Home