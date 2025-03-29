
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], 
  totalItems: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({

    name:"cart",

    initialState,

    reducers : {

        addToCart : (state , action) => {
            const {productId , name ,price,image} = action.payload;
            state.items.push({productId,name,price,quantity:1,totalPrice:price,image});
              state.totalItems += 1;
            state.totalPrice += price;         
        },

      updateQuantity: (state, action) => {
    const { productId, quantity } = action.payload;
    const item = state.items.find(item => item.productId === productId);
    
    if (item) {
        const newQuantity = item.quantity + quantity;
        if (newQuantity > 0) {
            item.quantity = newQuantity;
            item.totalPrice = newQuantity * item.price;
            state.totalItems += quantity;
            state.totalPrice += quantity * item.price;
        } else {
            
            state.items = state.items.filter(item => item.productId !== productId);
            state.totalItems -= item.quantity;
            state.totalPrice -= item.totalPrice;
        }
    }
},
  removeFromCart: (state, action) => {
    const productId = action.payload;  
    console.log(state.items)
    

    const itemIndex = state.items.findIndex((item) => item.productId === productId);
    console.log(itemIndex)

    if (itemIndex !== -1) {
        const removedItem = state.items[itemIndex];

        
        state.totalItems -= removedItem.quantity;
        state.totalPrice -= removedItem.price * removedItem.quantity;

        
        state.items.splice(itemIndex, 1);
    }
}

        
    }

});

export const {addToCart,removeFromCart,updateQuantity} = cartSlice.actions;

export default cartSlice.reducer;