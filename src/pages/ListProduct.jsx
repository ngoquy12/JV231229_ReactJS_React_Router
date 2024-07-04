import React from "react";
import { Link } from "react-router-dom";

export default function ListProduct() {
  const products = [
    {
      id: 1,
      name: "Cam",
      price: 10000,
    },
    {
      id: 2,
      name: "Tao",
      price: 12000,
    },
    {
      id: 3,
      name: "Chuoi",
      price: 15000,
    },
  ];
  return (
    <div>
      <h2>List product</h2>
      {products.map((pro) => (
        <>
          <div>
            <p>id: {pro.id}</p>
            <p>name: {pro.name}</p>
            <p>price: {pro.price}</p>
            <button>
              <Link to={`/product-detail/${pro.id}`}>Detail</Link>
            </button>
          </div>
        </>
      ))}
    </div>
  );
}
