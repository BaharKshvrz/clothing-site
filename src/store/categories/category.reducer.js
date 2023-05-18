import { createSlice } from "@reduxjs/toolkit";

export const CATAGORIES_INITIAL_STATE = {
    categories: [],
};

export const categoriesSlice = createSlice({
   name: 'categories',
   initialState: CATAGORIES_INITIAL_STATE,
   reducers: {
      setCategories(state, action) {
         state.categories = action.payload;
      }
   }
});

export  const {setCategories} = categoriesSlice.actions;
export const categoriesReducer = categoriesSlice.reducer;
