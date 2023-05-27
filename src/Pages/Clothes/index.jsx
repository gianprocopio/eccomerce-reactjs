import React, {useContext, useEffect} from 'react';
import { Context } from '../../Context';
import Loader from '../../Components/Loader';
import Layout from '../../Components/Layout';
import Card from '../../Components/Card';

function Clothes() {
  const {products, loading} = useContext(Context)
  
      const clothes = products?.filter(product => product.category.name == "Clothes");

  return (
    <Layout>
        {!loading && <Loader/>}
        <div className='grid place-content-center lg:grid-cols-4 gap-3 mt-5 w-full max-w-screen-lg md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>

        {loading && clothes?.map(product=>(

            <Card key={product.id}
              name={product.title}
              category={product.category.name}
              img={product.images[0]}
              price={product.price}
              description={product.description}
              id={product.id}/>
            ))
              }
        </div>
    </Layout>
  )
}

export default Clothes