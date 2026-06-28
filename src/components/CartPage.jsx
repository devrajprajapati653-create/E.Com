import React, { useState, useEffect } from "react";
import CartList from "./CartList";
import { getDataList } from "./API";
import { TiArrowBackOutline } from "react-icons/ti";
import { Link } from "react-router-dom";


function CartPage({ cart }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getDataList().then((res) => setData(res.data.products));
  }, []);

  const cartIds = Object.keys(cart);

  // 1. Map out your filtered cart items with quantities
  const filterCart = data
    .filter((product) => cartIds.includes(String(product.id)))
    .map((product) => ({
      ...product,
      quantity: cart[String(product.id)],
    }));

  // 2. Derive the grand total directly from the filtered cart items
  const grandTotal = filterCart.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price * currentItem.quantity;
  }, 0);

  return (
    <>
      <main className="flex flex-col items-center justify-center gap-10 m-10 *:border-gray-300">
        <div className="border min-w-4xl flex flex-col items-center justify-between">
          <header className="h-10 border-b w-full flex flex-row items-center bg-amber-50 border-gray-300">
            <p className="w-1/2 text-center">Product</p>
            <div className="flex justify-around w-1/2">
              <p>Price</p>
              <p>Quantity</p>
              <p>Subtotal</p>
            </div>
          </header>
          {/* Removed onSubTotal since we calculate total here */}
          <CartList cartItems={filterCart} />
          <footer className="w-full h-10 flex justify-around items-center">
            <div className="flex gap-10 w-1/2">
              <input
                type="text"
                placeholder="Coupon code?"
                className="border text-center p-1 rounded-md"
              />
              <button className="text-white bg-red-500 px-3 p-1 rounded-md">
                APPLY COUPON
              </button>
            </div>
            <button className="text-gray-500 bg-red-500 px-3 p-1 rounded-md">
              UPDATE CERT
            </button>
          </footer>
        </div>

        <Link
          to="/"
          className="absolute top-10 left-4 text-white bg-red-400 hover:text-red-400 hover:bg-white hover:border hover:border-red-400 rounded-full px-4 py-2"
        >
          <TiArrowBackOutline />
        </Link>

        <aside className="border self-end *:pl-10 w-1/2 flex flex-col justify-start font-medium *:border-gray-300">
          <header className="h-10 border-b w-full p-2 bg-amber-50 ">
            Cart Totals
          </header>
          <div className="flex items-center border-b p-2">
            <p>Sub Total</p>
            {/* 3. Render the calculated total (formatted to 2 decimal places) */}
            <p className="pl-15">${grandTotal.toFixed(2)}</p>
          </div>
          <div className="flex items-center border-b p-2">
            <p>Total</p>
            <p className="pl-23 ">${grandTotal.toFixed(2)}</p>
          </div>
          <button className="text-white bg-red-500 font-normal h-10 mx-10 m-2 rounded-sm">
            PROCEED TO CHECOUT
          </button>
        </aside>
      </main>
    </>
  );
}

export default CartPage;
