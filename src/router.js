import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./screens/home/home";
import Product from "./screens/product/product";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
