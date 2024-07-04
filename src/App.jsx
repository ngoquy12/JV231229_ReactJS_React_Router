import React from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AboutRikkeiSoft from "./pages/AboutRikkeiSoft";
import AboutRikkeiAcademy from "./pages/AboutRikkeiAcademy";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";
import ListProduct from "./pages/ListProduct";

export default function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink end to="/about">
          About
        </NavLink>
        <NavLink to="/about/rikkei-soft">About RikkeiSoft</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="rikkei-soft" element={<AboutRikkeiSoft />} />
          <Route path="rikkei-academy" element={<AboutRikkeiAcademy />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product-detail/:id" element={<ProductDetail />} />
        <Route path="/list-product" element={<ListProduct />} />
      </Routes>
    </>
  );
}
