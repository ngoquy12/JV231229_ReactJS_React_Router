import React, { useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";

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

  const [searchParam, setSearchParam] = useSearchParams();
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    setSearchParam({ search: inputValue });
  };

  const value = searchParam.get("search");
  console.log(value);

  return (
    <div>
      <input
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        type="text"
      />
      <button onClick={handleSearch}>Tìm kiếm</button>
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
