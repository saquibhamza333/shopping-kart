import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchProducts } from "../redux/productSlice";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault(); 
    dispatch(searchProducts(searchInput));
    setSearchInput("");
  };

  return (
    <form className="max-w-3xl mx-auto" onSubmit={handleSearch}>
      <div className="relative flex items-center border border-gray-400 bg-white rounded-full">
        <div className="absolute left-3">
          <svg
            className="w-5 h-5 text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="w-full h-10 pl-10 pr-20 text-black bg-white rounded-full focus:ring-2 focus:ring-gray-800 focus:border-gray-800"
          placeholder="Search products..."
        />
        <button
          type="submit"
          className="absolute right-1 h-8 px-4 text-white bg-black hover:bg-gray-800 focus:ring-2 focus:ring-gray-600 rounded-full text-sm cursor-pointer"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
