import React from 'react'

function Layout({children}) {
  return (
    <div className='flex flex-col mt-20 items-center justify-center mx-auto'>
        {children}
    </div>
  )
}

export default Layout