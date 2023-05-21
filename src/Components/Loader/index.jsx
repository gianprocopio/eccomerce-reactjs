import React from 'react';
import { ThreeDots } from  'react-loader-spinner'

function Loader() {
  return (
    <ThreeDots 
    height="500" 
    width="80" 
    radius="9"
    color="#2563eb" 
    ariaLabel="three-dots-loading"
    wrapperStyle={{}}
    wrapperClassName=""
    visible={true}
 />
  )
}

export default Loader