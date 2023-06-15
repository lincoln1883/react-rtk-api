import { createSlice } from '@reduxjs/toolkit';
import { orderCake } from '../cake/cakeSlice';

const initialState = {
  iceCreamCount: 1,
};

const iceCreamSlice = createSlice({
  name: 'iceCream',
  initialState,
  reducers: {
    orderIceCream: (state, action) => {
      state.iceCreamCount -= action.payload;
    },
    addIceCream: (state, action) => {
      state.iceCreamCount += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(orderCake, (state, action) => {
      state.iceCreamCount -= action.payload;
    });
  },
});

export default iceCreamSlice.reducer;
export const { orderIceCream, addIceCream } = iceCreamSlice.actions;
