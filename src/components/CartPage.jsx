import React from "react";
import CartList from "./CartList";

function CartPage() {
  return (
    <div className="sm:flex sm:items-center sm:justify-center sm:bg-gray-400 py-12 w-full">
      <div className="relative bg-white flex flex-col gap-4 m-auto sm:p-8 max-w-4xl md:rounded-sm w-full">
        <div className="border">
          <div className="flex flex-row gap-4 px-8 w-full border-b p-2 font-bold bg-gray-100">
            <div className="w-1/2">
              <h2 className="text-center">Product</h2>
            </div>
            <div className="w-1/2 flex justify-around">
              <h2>Price</h2>
              <h2>quantity</h2>
              <h2>Sub Total</h2>
            </div>
          </div>
          <CartList />
          <div className="flex justify-between p-4">
            <div className="flex gap-4">
              <input
                type="text"
                className="border border-gray-500 text-red-500 rounded-xl px-4 w-32"
              />
              <button className="text-white bg-red-500 border-none rounded-xl px-4 py-2 w-32">
                Apply Code
              </button>
            </div>
            <div>
              <button className="text-white bg-red-500 border-none rounded-xl px-4 py-2 w-48">
                Update Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;