import React from 'react'
import { CiCircleRemove } from "react-icons/ci";


function CartRow({ thumbnail, title, price, quantity }) {
  const subTotal = quantity * price;
  return (
    <>
      <div className="w-full flex flex-row items-center font-medium">
        <div className="w-1/2 flex justify-around items-center">
          <div className="flex w-1/3 justify-around items-center">
            <CiCircleRemove size={25}/>
            <img src={thumbnail} alt={title} className="size-15" />
          </div>
          <p className="w-2/3 px-10 text-red-500">{title}</p>
        </div>
        <div className="w-1/2 flex justify-around">
          <p>$ {price}</p>
          <p>{quantity}</p>
          <p>$ {subTotal.toFixed(2)}</p>
        </div>
      </div>
    </>
  );
}

export default CartRow;
