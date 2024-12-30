import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";

import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  return (
    <div>
      {/* Products Container */}
      <div className="mt-6">
        <h1 className="text-2xl font-bold text-center sm:text-3xl">
          Items in Stock 📦
        </h1>

        {/*  Card Body` */}
        <div className="grid grid-cols-2 gap-2 px-5 pt-5 md:gap-6 md:pt-10 sm:px-10 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => {
            return <ProductCard key={product._id} product={product} />;
          })}
        </div>
        {/*If  No Product Available Heading */}
        {products.length === 0 && (
          <p className="mt-5 text-center ">
            Oops! No Products Yet 😟{" "}
            <Link
              to={"/create"}
              className="font-bold text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text"
            >
              Create new product
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
