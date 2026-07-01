import React, { useState, useEffect } from "react";
import CartList from "./CartList";
import { getData } from "./API";
import { TiArrowBackOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";


function CartPage({cart}) {

  const [filterCart, setFilterCart] = useState([]);

  useEffect(() => {
    const promises = Object.keys(cart).map((id) => getData(id));

    Promise.all(promises).then((results) => {
      console.log("Results from API:", results);
      const products = results.map((product) => {
        return {
          ...product.data,
          quantity: cart[product.data.id],
        };
      });

      setFilterCart(products);
    });
  }, [cart]);

  console.log("Filtered Cart:", filterCart);

  const grandTotal = filterCart.reduce((total, product) => {
    return total + product.price * product.quantity;
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

          <CartList cartItems={filterCart} />
          <footer className="w-full h-10 flex justify-around items-center">
            <div className="flex gap-10 w-1/2">
              <Input
                type={"text"}
                placeholder={"Coupon Code?"}
                style={
                  "border text-center p-1 rounded-md outline-none uppercase"
                }
              />
              <Button
                style="button px-3 p-1"
                text="APPLY COUPON"
              />
            </div>
            <Button
              style="button px-3 p-1 !text-gray-400"
              text={"UPDATE CERT"}
            />
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
            <p className="pl-15">${grandTotal.toFixed(2)}</p>
          </div>
          <div className="flex items-center border-b p-2">
            <p>Total</p>
            <p className="pl-23 ">${grandTotal.toFixed(2)}</p>
          </div>
          <Button
            style="button h-10 mx-10 m-2"
            text="PROCEED TO CHECKOUT"
          />
        </aside>
      </main>
    </>
  );
}

export default CartPage;
