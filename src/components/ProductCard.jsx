import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.items);
  const cartItem = cartItems.find((item) => item.productId === product?.id);
  const isInCart = !!cartItem;

  const handleAddToCart = (e) => {
    e.stopPropagation(); 
    dispatch(
      addToCart({
        productId: product.id,
        name: product.title,
        price: product.price,
        image: product.image,
      })
    );
  };

  const handleGoToCart = (e) => {
    e.stopPropagation(); 
    navigate("/cart");
  };

  return (
    <div
      className="my-6 flex w-full max-w-xs flex-col rounded-lg border border-gray-200 bg-white shadow-md transition-transform duration-300 hover:shadow-lg cursor-pointer"
      onClick={() => navigate(`/product/${product.id}`)} 
    >
      
      <div className="relative mx-4 mt-4 flex aspect-[4/3] items-center justify-center overflow-hidden rounded-lg bg-gray-100">
        <img
          className="w-full h-full object-contain p-4 transition-transform duration-300 hover:scale-105"
          src={product.image}
          alt={product.title}
        />
      </div>

      <div className="px-6 py-4 flex flex-col flex-grow">
        <h5 className="text-lg font-semibold text-gray-900 line-clamp-2 h-12">
          {product.title}
        </h5>

        <div className="mt-3 flex items-center justify-between">
          <p className="text-xl font-bold text-gray-900">₹{product.price}</p>
        </div>
      </div>

      <div className="px-6 pb-6">
        <button
          className={`w-full flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium text-white transition-all cursor-pointer ${
            isInCart ? "bg-green-600 hover:bg-green-700" : "bg-gray-900 hover:bg-gray-700"
          }`}
          onClick={isInCart ? handleGoToCart : handleAddToCart}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          {isInCart ? "Go to Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
