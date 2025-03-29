import React from "react";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

const ProductList = () => {
  const { filteredProducts, allProducts } = useSelector((state) => state.products);

  
  const productsToShow = filteredProducts.length > 0 ? filteredProducts : allProducts;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-4">
      {productsToShow.length > 0 ? (
        productsToShow.map((product) => (
          <div key={product.id} className="group relative">
            <ProductCard product={product} />
          </div>
        ))
      ) : (
        <div className="col-span-full py-12 text-center">
          <p className="text-gray-500 text-lg">No products found</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;
