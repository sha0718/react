import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
      items : [],
  },
  reducers:{
    // mutating the state
    addItem : (state, action) => {
      state.items.push(action.payload);
    },
    removeItem : (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart : (state) => {
       state.items.length = 0;
    //   return {items: []}; this new object will be replaced inside original state = {items: []}
    },
  },
  });

export const {addItem, removeItem, clearCart} = cartSlice.actions;  
export default cartSlice.reducer;