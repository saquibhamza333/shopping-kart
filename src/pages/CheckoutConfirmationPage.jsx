import { useNavigate } from "react-router-dom";

const CheckoutConfirmationPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  text-white">
      <div className="bg-white text-black p-8 rounded-2xl shadow-lg text-center max-w-md">
        <h2 className="text-2xl font-semibold">Order Placed Successfully! 🎉</h2>
        <p className="text-gray-700 mt-4">
          Thank you for your purchase! Your order has been successfully placed. You will receive an email confirmation shortly.
        </p>
        <button
          onClick={() => navigate("/")}
          className="mt-6 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition duration-300 cursor-pointer"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default CheckoutConfirmationPage;
