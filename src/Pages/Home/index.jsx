import React, { useState, useContext} from 'react';
import Layout from '../../Components/Layout';
import Card from '../../Components/Card';
import Loader from '../../Components/Loader';
import ProductDetail from '../../Components/ProductDetail';
import { Context } from '../../Context';


function Home() {
  
  const {products, loading, setSearchValue, searchValue} = useContext(Context);
  
  

  return (
    <Layout>

      <h1 className='font-medium text-xl'>What are you looking for?</h1>
      <input 
      type='text' 
      placeholder='Search...' 
      className='border border-black outline-none mt-8 p-2 text-md w-80 rounded-lg'
      onChange={(e)=> setSearchValue(e.target.value)}
      />
      {!loading && <Loader/>}
      <div className='grid place-content-center lg:grid-cols-4 gap-3 mt-5 w-full max-w-screen-lg md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>

      {loading && products.map(product=>{
        if(product.title.toLowerCase().includes(searchValue.toLowerCase())){
          
          return<Card 
          key={product.id}
          name={product.title}
          category={product.category.name}
          img={product.images[0]}
          price={product.price}
          description={product.description}
          id={product.id}
          />
        }
      })}

      </div>

      <ProductDetail/>
    </Layout>
  )
}

export default Home