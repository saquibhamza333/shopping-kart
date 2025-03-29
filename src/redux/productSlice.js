import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: [],
    filteredProducts: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.allProducts = action.payload;
      state.filteredProducts = action.payload;
    },
    searchProducts: (state, action) => {
      const query = action.payload.toLowerCase();
      if (!query) {
        state.filteredProducts = state.allProducts;
      } else {
        state.filteredProducts = state.allProducts.filter((product) =>
          product.title.toLowerCase().includes(query)
        );
      }
    },
      clearFilters: (state) => {  
      state.filteredProducts = [];
    }
  },
});

export const { setProducts, searchProducts ,clearFilters } = productSlice.actions;
export default productSlice.reducer;
