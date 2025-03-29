import React, { useContext } from "react";
import ProductList from "../components/ProductList";
import CartSummary from "../components/CartSummary"; 
import { UserContext } from "../context/UserContext";

const Home = () => {
  const { user } = useContext(UserContext);
  return (

    <div>
      <h2 className="text-2xl font-bold mt-20">Welcome, {user.username}!</h2>
    <div className="flex px-4 lg:px-16 ">
   
      
      <div className="flex w-full  justify-center">
        <ProductList />
      </div>

      
      <div className="hidden lg:block w-1/5 ml-6">
        <CartSummary />
      </div>
    </div>
    </div>
  );
};

export default Home;
