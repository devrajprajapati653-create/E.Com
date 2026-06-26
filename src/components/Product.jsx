import React from "react";
import { Link } from "react-router";
import { VscStarEmpty } from "react-icons/vsc";

function Product({ image, title, category, price, id }) {
  return (
    <Link to={"/products/" + id} className="text-blue-900 text-xs ml-auto">
      <div className=" shadow-xl">
        <div>
          <img className="w-full aspect-square" src={image} />
        </div>
        <div className="flex flex-col gap-1 p-2 ">
          <p className="text-sm font-bold text-gray-500">{category}</p>
          <h2 className="font-bold text-xl text-gray-700">{title}</h2>
          <h2 className="font-bold text-xl text-gray-700">$ {price}</h2>
          <div className="flex text-amber-400 text-xl">
            <VscStarEmpty />
            <VscStarEmpty />
            <VscStarEmpty />
            <VscStarEmpty />
            <VscStarEmpty />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Product;
