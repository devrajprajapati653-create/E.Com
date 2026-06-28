import React, { useEffect, useState } from "react";
import Product from "./Product";
import Loader from "./Loader";

function ProductList({Products}) {

  if (!Products) {
    return <Loader />;
  }
  
  return (
    <div className="sm:grid grid-cols-2 md:grid-cols-3 gap-2  overflow-auto">
      {Products.map(function ({ thumbnail, title, category, price, id }) {
        return (
          <Product
            key={id} 
            id={id}
            image={thumbnail}
            title={title}
            category={category}
            price={price}
          />
        );
      })}
    </div>
  );
}

export default ProductList;
