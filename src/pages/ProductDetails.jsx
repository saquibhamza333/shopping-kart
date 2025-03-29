import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  
  const { allProducts } = useSelector((state) => state.products);
  const product = allProducts.find((product) => product.id === parseInt(id));

  
  const cartItems = useSelector((state) => state.cart.items);
  const cartItem = cartItems.find((item) => item.productId === product?.id);
  const isInCart = !!cartItem;

  
  const handleAddToCart = (e) => {
    e.stopPropagation(); 
    if (!product) return;

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

  if (!product) {
    return <div className="text-center py-8">Product not found</div>;
  }

  return (
    <section className="py-8 bg-white md:py-16 antialiased mt-8">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
          
          <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
            <img className="w-1/2" src={product.image} alt={product.title} />
          </div>

        
          <div className="mt-6 sm:mt-8 lg:mt-0">
            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              {product.title}
            </h1>

            
            <div className="mt-4 sm:flex sm:items-center sm:gap-4">
              <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                ₹{product.price}
              </p>

              <div className="flex items-center gap-2 mt-2 sm:mt-0">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.round(product.rating?.rate || 0)
                          ? "text-yellow-300"
                          : "text-gray-300"
                      }`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm font-medium leading-none text-gray-500">
                  ({product.rating?.rate || 0})
                </p>
                <a
                  href="#"
                  className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline"
                >
                  {product.rating?.count || 0} Reviews
                </a>
              </div>
            </div>

            <button
              className={`w-full mt-12 flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium text-white transition-all cursor-pointer ${
                isInCart
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-gray-900 hover:bg-gray-700"
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

            <hr className="my-6 md:my-8 border-gray-200" />

            <p className="mb-6 text-gray-500">{product.description}</p>

            <p className="text-gray-500">Category: {product.category}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
