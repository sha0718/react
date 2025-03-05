import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
      items : [],
      totalAmount: 0,
  },
  reducers:{
    // mutating the state
    addItem : (state, action) => {
      const newItem = action.payload;
      state.items.push(newItem);
      state.totalAmount += newItem.price;
    },
    removeItem : (state, action) => {
      const itemIndex = state.items.findIndex(item => item.id === action.payload);
      if (itemIndex !== -1) {
        state.totalAmount -= state.items[itemIndex].price; // ✅ Deduct amount
        state.items.splice(itemIndex, 1); 
      }
    },
    clearCart : (state) => {
      state.items = []; // ✅ Clear cart
      state.totalAmount = 0; // ✅ Reset total amount
    //   return {items: []}; this new object will be replaced inside original state = {items: []}
    },
  },
  });

export const {addItem, removeItem, clearCart} = cartSlice.actions;  
export default cartSlice.reducer;