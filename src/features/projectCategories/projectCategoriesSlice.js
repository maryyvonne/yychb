import { createSlice } from "@reduxjs/toolkit";
import { PROJECTCATEGORIES } from "../../app/shared/PROJECTCATEGORIES";

const initialState = {
  categoriesArray: PROJECTCATEGORIES,
};
const categoriesSlice = createSlice({
  name:'categories',
  initialState,
  
});

export const categoriesReducer = categoriesSlice.reducer;

export const selectAllProjectCategories = (state) => {
  return state.categories.categoriesArray
;
};

export const selectProjectCategoryById = (id) => (state) => {
  return state.categories.categoriesArray.find((category) => category.id === parseInt(id));
};

export const selectFeaturedProjectCategory = (state) => {
  return state.categories.categoriesArray.find((category) => category.featured);
};