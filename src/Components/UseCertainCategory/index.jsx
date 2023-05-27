import React, {useContext} from 'react';
import { Context } from '../../Context';
import Loader from '../Loader';
import Layout from '../Layout';
import Card from '../Card';
import ProductDetail from '../ProductDetail';
import SignIn from '../../Pages/SignIn';

function UseCertainCategory({cat}) {
  const {products, loading, setSearchValue, searchValue, authenticated} = useContext(Context)
  
  const category = products?.filter(product => product.category.name == cat);

  const Render = ()=>{
    if(authenticated){
      return (
        <Layout>

      <h1 className='font-medium text-xl'>{cat}</h1>
      <input 
      type='text' 
      placeholder='Search...' 
      className='border border-black outline-none mt-8 p-2 text-md w-80 rounded-lg'
      onChange={(e)=> setSearchValue(e.target.value)}
      />
        {!loading && <Loader/>}
        <div className='grid place-content-center lg:grid-cols-4 gap-3 mt-5 w-full max-w-screen-lg md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>

        {loading && category?.map(product=>{
          if(product.title.toLowerCase().includes(searchValue.toLowerCase())){
            return <Card key={product.id}
            name={product.title}
            category={product.category.name}
            img={product.images[0]}
            price={product.price}
            description={product.description}
            id={product.id}/>
          }
        })
              }
        </div>
        <ProductDetail/>
    </Layout>
      )
    }else{
      return(
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

export default UseCertainCategory;