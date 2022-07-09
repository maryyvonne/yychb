import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { categoriesReducer } from "../features/projectCategories/projectCategoriesSlice";

export const store =
configureStore({
  reducer: {
    categories: categoriesReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger]),
})