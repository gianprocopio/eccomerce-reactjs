import React, {useContext} from 'react';
import { Context } from '../../Context';

function Notification() {
    const {openNotification} = useContext(Context);


  return (
    <div className={`flex justify-center items-center m-auto rounded-lg z-10 fixed w-full transition-all duration-300 ${openNotification ? "top-0": "top-[-200px]"}`}>
        <h2 className={`p-3 rounded-lg text-white mt-20 bg-zinc-900 text-xl `}>Item has been added to the cart ✅</h2>
    </div>
  )
}

export default Notification