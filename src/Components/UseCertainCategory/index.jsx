import React, {useContext} from 'react';
import { Context } from '../../Context';
import Loader from '../Loader';
import Layout from '../Layout';
import Card from '../Card';
import ProductDetail from '../ProductDetail';
import SignIn from '../../Pages/SignIn';

function UseCertainCategory({catTitle, cat}) {
  const {products, loading, setSearchValue, searchValue, authenticated} = useContext(Context)
  console.log(products);
  
  const category = products?.filter(product => product.category == cat);

  const Render = ()=>{
    if(authenticated){
      return (
        <Layout>

      <h1 className='font-medium text-xl'>{catTitle}</h1>
        {!loading && <Loader/>}
        <div className='grid place-content-center lg:grid-cols-4 gap-3 mt-5 w-full max-w-screen-lg md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>

        {loading && category?.map(product=>{
            return <Card key={product.id}
            name={product.title}
            category={product.category}
            img={product.image}
            price={product.price}
            description={product.description}
            id={product.id}/>
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