import React from "react";
import CartRow from "./CartRow";

function CartList({ cartItems }) {
  return (
    <>
      {cartItems.map(({ thumbnail, title, price, id, quantity }) => {
        return (
          <div
            className="border-b border-gray-300 min-w-4xl flex flex-col items-center justify-between"
            key={id}
          >
            <CartRow
              title={title}
              price={price}
              thumbnail={thumbnail}
              quantity={quantity}
            />
          </div>
        );
      })}
    </>
  );
}

export default CartList;
