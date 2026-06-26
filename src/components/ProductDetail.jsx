import { Link, useParams } from "react-router-dom";
import { TiArrowBackOutline } from "react-icons/ti";
import { VscStarEmpty } from "react-icons/vsc";
import { use, useEffect, useState } from "react";
import { getData } from "./API";
import Loader from "./Loader";

function ProductDetail({ onAddToCart }) {
  const [product, setProduct] = useState();
  const [Quantity, setQuantity] = useState(1);
  const id = +useParams().id;

  useEffect(() => {
    getData(id).then(function (response) {
      setProduct(response.data);
    });
    setQuantity(1);
  }, [id]);


  if (!product) {
    return <Loader className="h-full bg-gray-400" />;
  }

  const { thumbnail, title, price, description } = product;

  function QuantityChange(event) {
    setQuantity(+event.target.value);
  }

  function onButtonClick() {
    onAddToCart(id, Quantity);
  }

  return (
    <div className="sm:flex flex-col sm:items-center sm:justify-center sm:bg-gray-400 h-full">
      <div className="relative bg-white flex flex-col items-center sm:flex-row sm:items-start sm:p-8 sm:max-w-5xl sm:mx-auto sm:my-5 sm:rounded-sm">
        <img
          src={thumbnail}
          alt={title}
          className="sm:min-w-2/5 min-h-auto object-cover text-center"
        />
        <div className="sm:w-3/5 flex flex-col gap-4 px-8">
          <h1 className="text-2xl text-black md:text-4xl ">{title}</h1>
          <h3 className="font-bold text-gray-500 md:text-2xl">${price}</h3>
          <p className="text-sm text-gray-500 md:text-2xl">{description}</p>
          <div className="flex text-amber-400 text-xl">
            <VscStarEmpty />
            <VscStarEmpty />
            <VscStarEmpty />
            <VscStarEmpty />
            <VscStarEmpty />
          </div>
          <div className="flex gap-1">
            <input
              type="number"
              value={Quantity}
              onChange={QuantityChange}
              className="border-2 border-gray-500  rounded-xl p-1 w-12"
            />
          
              <button
                onClick={onButtonClick}
                className="text-white bg-red-500  hover:text-red-500 hover:bg-white hover:border hover:border-red-500 rounded-xl px-4 py-2"
              >
                ADD TO CART
              </button>
          
          </div>
          <div className="flex justify-between mt-10">
            <div>
              {id > 1 && (
                <Link
                  to={"/products/" + (id - 1)}
                  className="bg-red-400 text-xl text-white hover:text-red-400 hover:bg-white hover:border hover:border-red-400 p-2 rounded-xl"
                >
                  ← Previous
                </Link>
              )}
            </div>
            <Link
              to={"/products/" + (id + 1)}
              className="bg-red-400 text-xl text-white  hover:text-red-400 hover:bg-white hover:border hover:border-red-400 p-2 mb-4 rounded-xl"
            >
              Next →
            </Link>
          </div>
        </div>
        <Link
          to="/"
          className="absolute top-4 left-4 text-white bg-red-400  hover:text-red-400 hover:bg-white hover:border hover:border-red-400 rounded-full px-4 py-2"
        >
          <TiArrowBackOutline />
        </Link>
      </div>
    </div>
  );
}

export default ProductDetail;
