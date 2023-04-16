import React from "react";
import Header from "./Componets/Header/Header";

import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Componets/Footer/Footer";
import ProductDetails from "./Pages/ProductDetails";

export default function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<ProductDetails />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
