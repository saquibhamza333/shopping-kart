import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../redux/cartSlice";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Cart = () => {
  const { user } = useContext(UserContext);
  const dispatch = useDispatch();
  const { items, totalItems, totalPrice } = useSelector((state) => state.cart);
  console.log(items);

  const handleQuantityChange = (productId, quantity) => {
    dispatch(updateQuantity({productId,quantity}))
   
  };

  return (
    <div className="max-w-5xl max-md:max-w-xl mx-auto p-4 mt-16">
       <h2 className="text-2xl font-bold  ">Hello, {user.username}! Here's your cart:</h2>

      {items.length > 0 ? (
        <div className="grid md:grid-cols-3 gap-10 mt-16">
          <div className="md:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.productId}
                className="flex gap-4 bg-white px-4 py-6 rounded-md shadow-md"
              >
                <div className="flex gap-4">
                  <div className="w-28 h-28 shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="flex flex-col gap-4">
                    <div>
                      <h3 className="text-sm sm:text-base font-semibold text-slate-900">
                        {item.title}
                      </h3>
                      
                    </div>

                    <div className="mt-auto flex items-center gap-3">
                      <button
                        type="button"
                        className="flex items-center justify-center w-5 h-5 bg-slate-100 outline-none rounded-full cursor-pointer"
                        onClick={() => handleQuantityChange(item.productId, - 1)}
                      >
                        -
                      </button>
                      <span className="font-semibold text-sm">{item.quantity}</span>
                      <button
                        type="button"
                        className="flex items-center justify-center w-5 h-5 bg-slate-100 outline-none rounded-full cursor-pointer"
                        onClick={() => handleQuantityChange(item.productId,1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="ml-auto flex flex-col">
                 <button
  onClick={() => {
     const productId =item.productId;
    dispatch(removeFromCart(productId))
   
    console.log(productId);
  console.log("remove")}} 
  className="text-red-500 hover:text-red-700 cursor-pointer "
>
  🗑️
</button>

                  <h3 className="text-sm sm:text-base font-semibold text-slate-900 mt-auto">
                    ₹{item.price * item.quantity}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-6 rounded-md shadow-md h-fit">
            <h2 className="text-lg font-bold text-slate-900">Cart Summary</h2>
            <p className="text-sm text-slate-600 mt-2">
              Total Items: <span className="font-semibold">{totalItems}</span>
            </p>
            <p className="text-sm text-slate-600">
              Total Price: <span className="font-semibold">₹{totalPrice}</span>
            </p>
            <Link to={"/checkout"}>
            <button className="mt-4 w-full bg-black text-white py-2 rounded-md  cursor-pointer">
              Proceed to Checkout
            </button>
            </Link>
          </div>
        </div>
      ) : (
        <p className="text-center text-lg text-slate-600 mt-10">
          Your cart is empty.
        </p>
      )}
    </div>
  );
};

export default Cart;
