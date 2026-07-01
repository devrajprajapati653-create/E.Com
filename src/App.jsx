import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Short from "./components/short";
import ProductDetail from "./components/ProductDetail";
import CartPage from "./components/CartPage";

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
  
  const totalCount = Object.keys(cart);
  const totalCarts = totalCount.length;

  console.log("cart in app", cart)

  return (
    <div className="h-screen box-border flex flex-col items-center justify-around">
      <Header productCount={totalCarts} />
      <div className="grow">
        <Routes>
          <Route path="" element={<Short />} />
          <Route
            path="/products/:id/"
            element={<ProductDetail onAddToCart={onAddToCart} />}
          />
          <Route path={"/cart"} element={<CartPage cart={cart} />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;



