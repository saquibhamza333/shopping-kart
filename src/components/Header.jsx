import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart, User } from "lucide-react"; 
import SearchBar from "./SearchBar";
import { clearFilters } from "../redux/productSlice";
import { useDispatch } from "react-redux";
import { UserContext } from "../context/UserContext";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();
  
  const { user } = useContext(UserContext); 

  return (
    <header className="fixed top-0 left-0 w-full bg-white text-black shadow-md z-20">
      <div className="flex justify-between items-center px-6 py-4">
        
        <Link to="/" className="text-2xl font-bold" onClick={() => dispatch(clearFilters())}>
        STORE
        </Link>

  
        <div className="hidden md:block">
          <SearchBar />
        </div>

        <div className="flex items-center space-x-4">
          
  
          <Link to="/cart">
            <ShoppingCart className="w-6 h-6 text-gray-800" />
          </Link>

          <Link to="/profile" className="hidden md:flex items-center gap-2 text-gray-700 hover:text-black transition">
            <User className="w-6 h-6" />
            <span className="font-medium">{user?.username || "Guest"}</span>
          </Link>

          
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-xl cursor-pointer">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      
      {menuOpen && (
        <nav className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md py-4 flex flex-col items-center space-y-4">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/cart" onClick={() => setMenuOpen(false)}>Cart</Link>
          <Link to="/profile" onClick={() => setMenuOpen(false)}>Profile</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
