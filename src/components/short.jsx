import React, {useEffect, useState} from "react";
import ProductList from "./ProductList";
import Pages from "./Pages";
import { getDataList } from "./API";

function Short() {
  
  const [Products, setProducts] = useState();

  useEffect(() => {
    getDataList().then(function (response) {
      setProducts(response.data.products);
      console.log("deva")
    });
  }, []);

  const [sort, setSort] = useState("default");

  if (sort == "low to high") {
    Products.sort((a, b) => a.price - b.price);
  } else if (sort == "high to low") {
    Products.sort((a, b) => b.price - a.price);
  } else if (sort == "beauty") {
    Products.sort((a, b) => {
      if (a.category == sort) return -1;
      else if (b.category == sort) return 1;
      else {
        return a.category.localeCompare(b.title);
      }
    });
  } else if (sort == "fragrances") {
    Products.sort((a, b) => {
      if (a.category == sort) return -1;
      else if (b.category == sort) return 1;
      else {
        return a.category.localeCompare(b.title);
      }
    });
  } else if (sort == "furniture") {
    Products.sort((a, b) => {
      if (a.category == sort) return -1;
      else if (b.category == sort) return 1;
      else {
        return a.category.localeCompare(b.title);
      }
    });
  } else if (sort == "groceries") {
    Products.sort((a, b) => {
      if (a.category == sort) return -1;
      else if (b.category == sort) return 1;
      else {
        return a.category.localeCompare(b.title);
      }
    });
  }

  function Sorted(event) {
    setSort(event.target.value);
  }
  return (
    <div className="bg-gray-400 w-full">
      <div className="bg-gray-100 h-screen flex flex-col justify-around p-5 max-w-5xl mx-auto">
        <div className="border-2 border-gray-700 rounded-2xl px-2 text-gray-700 self-end">
          <select onChange={Sorted} value={sort}>
            <option value="default" className="text-blue-600">
              Default Sort
            </option>
            <option value="beauty" className="text-blue-600">
              Beauty
            </option>
            <option value="fragrances" className="text-blue-600">
              Fragrances
            </option>
            <option value="furniture" className="text-blue-600">
              Furniture
            </option>
            <option value="groceries" className="text-blue-600">
              Groceries
            </option>
            <option value="low to high" className="text-blue-600">
              Price: Low To High
            </option>
            <option value="high to low" className="text-blue-600">
              Price: High To Low
            </option>
          </select>
        </div>
        <ProductList Products={Products} />
        <Pages />
      </div>
    </div>
  );
}

export default Short;
