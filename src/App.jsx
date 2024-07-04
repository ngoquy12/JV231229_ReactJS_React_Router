import React, { Suspense, useEffect } from "react";
import { Link, NavLink, Route, Routes, useLocation } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import AboutRikkeiSoft from "./pages/AboutRikkeiSoft";
// import AboutRikkeiAcademy from "./pages/AboutRikkeiAcademy";
// import NotFound from "./pages/NotFound";
// import Login from "./pages/Login";
// import ProductDetail from "./pages/ProductDetail";
// import ListProduct from "./pages/ListProduct";

const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Contact = React.lazy(() => import("./pages/Contact"));
const AboutRikkeiSoft = React.lazy(() => import("./pages/AboutRikkeiSoft"));
const AboutRikkeiAcademy = React.lazy(() =>
  import("./pages/AboutRikkeiAcademy")
);
const NotFound = React.lazy(() => import("./pages/NotFound"));
const Login = React.lazy(() => import("./pages/Login"));
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"));
const ListProduct = React.lazy(() => import("./pages/ListProduct"));

export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);
  return (
    <>
      <nav
        style={{
          position: "sticky",
          top: 0,
          backgroundColor: "#fff",
          zIndex: 10,
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      {/* <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink end to="/about">
          About
        </NavLink>
        <NavLink to="/about/rikkei-soft">About RikkeiSoft</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav> */}

      <Suspense fallback={"Loading..."}>
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
      </Suspense>
    </>
  );
}
