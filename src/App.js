import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./Pages/header/Header";
import Pages from "./Pages/pages/Pages";
import { useState } from "react";
import Cart from "./components/cart/Cart";
import Footer from "./components/footer/Footer";
import Login from "./Pages/Login/Login";
import Register from "./Pages/register/Register";
import Logout from "./Pages/logout/Logout";

function App() {
  const [cartItem, setCartItem] = useState([]);
  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id);
    if (productExit) {
      setCartItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
    } else {
      setCartItem([...cartItem, { ...product, qty: 1 }]); // Thêm sản phẩm mới vào giỏ hàng
    }
  };
  const decreaseQty = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id);
    if (productExit.qty === 1 ) {
      setCartItem(cartItem.filter((item) => item.id !== product.id))
    }else{
      setCartItem(cartItem.map((item) => (item.id === product.id ? {...productExit, qty: productExit.qty-1}:item)))
    }
  }
  return (
    <>
      <Header cartItem={cartItem} />
      <Routes>
        <Route path="/" element={<Pages cartItem={cartItem} addToCart={addToCart}/>} exact></Route>
        <Route path="/cart" element={<Cart cartItem={cartItem} addToCart={addToCart} decreaseQty={decreaseQty}/>} exact></Route>
        <Route path="/login" element={<Login/>} exact></Route>
        <Route path="/register" element={<Register/>} exact></Route>
        <Route path="/logout" element={<Logout/>} exact></Route>


      </Routes>
      <Footer/>
    </>
  );
}

export default App;
