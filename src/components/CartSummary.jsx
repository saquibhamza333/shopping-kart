import React from "react";
import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";

const CartSummary = () => {
  const cart = useSelector((state) => state.cart);
  const totalItems = cart?.totalItems || 0;
  const totalPrice = cart?.totalPrice ? cart.totalPrice.toFixed(2) : "0.00";
  const items = cart?.items || [];

  return (
    <div className="bg-white text-black p-4 rounded-lg shadow-md w-72">
      
      <div className="flex items-center justify-between border-b pb-2 mb-3">
        <h2 className="text-lg font-semibold">Cart Summary</h2>
        <ShoppingCart className="w-6 h-6 text-gray-700" />
      </div>

    
      {items.length > 0 ? (
        <ul className="space-y-3">
          {items.map((item) => (
            <li key={item.id} className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-xs text-gray-600">
                  {item.quantity} × ₹{item.price.toFixed(2)}
                </p>
              </div>
              <p className="text-sm font-semibold">₹{(item.price * item.quantity).toFixed(2)}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500">No items in cart</p>
      )}

    
      <div className="mt-4 border-t pt-3 flex justify-between items-center">
        <p className="text-sm font-medium">Total ({totalItems} items):</p>
        <p className="text-lg font-semibold">₹{totalPrice}</p>
      </div>
    </div>
  );
};

export default CartSummary;
