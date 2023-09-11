import React from "react";
import Navbar from "./components/Navbar";
import BasketProducts from "./components/BasketProducts";
import Total from "./components/Total";
import { useSelector } from "react-redux";

function App() {
  const { products, amount } = useSelector((state) => state.basket);
  return (
    <div className="max-w-screen-lg max-h-max mx-auto px-5 backdrop-blur-lg">
      <Navbar />{" "}
      <h1 className="text-center py-3 text-5xl text-green-900 drop-shadow-2xl ">
        Redex Store
      </h1>
      {products.length == 0 && (
        <h1 className="text-red-600 font-bold text-center text-5xl">
          Xarid savatchangiz bo'sh!
        </h1>
      )}
      <BasketProducts /> {products.length > 0 && amount > 0 && <Total />}
    </div>
  );
}

export default App;
