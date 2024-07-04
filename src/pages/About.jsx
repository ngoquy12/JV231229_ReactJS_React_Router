import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function About() {
  const isLogin = JSON.parse(localStorage.getItem("userLogin"));

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, [isLogin]);

  return (
    <div>
      <nav>
        <button onClick={() => navigate(-1)}>Back to page</button>
        <button onClick={() => navigate(1)}>Next to page</button>
      </nav>
      {isLogin ? <Outlet /> : null}
      <footer>Footer</footer>
    </div>
  );
}
