import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Short from "./components/short";
import ProductDetail from "./components/ProductDetail";

function App() {
  const savedDataString = localStorage.getItem('my-cart') || "{}";
  const savedData = JSON.parse(savedDataString);

  const [cart, setCart] = useState(savedData);

  function onAddToCart(productId, quantity) {
    const oldCount = cart[productId] || 0;
    const newCart = {...cart, [productId] : oldCount + quantity};
    setCart(newCart);
    const cartString = JSON.stringify(newCart);
    localStorage.setItem('my-cart', cartString);
  }
  
  const totalCount = Object.keys(cart).reduce(function(previous, current){
    return previous + cart[current];
  }, 0);

  return (
    <div className="h-screen box-border flex flex-col items-center">
      <Header productCount={totalCount} />
      <div className="grow h-screen">
        <Routes>
          <Route path="" element={<Short />} />
          <Route
            path="/products/:id/"
            element={<ProductDetail onAddToCart={onAddToCart} />}
          />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;



