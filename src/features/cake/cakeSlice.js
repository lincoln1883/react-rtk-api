import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cakeCount: 1,
};

const cakeSlice = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    orderCake: (state, action) => {
      state.cakeCount -= action.payload;
    },
    addCake: (state, action) => {
      state.cakeCount += action.payload;
    },
  },
});

export default cakeSlice.reducer;
export const { orderCake, addCake } = cakeSlice.actions;
