import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./slices/categoriesSlice";
import productsReducer from "./slices/productsSlice";
import saleReducer from "./slices/salePost";

export default configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
    sale: saleReducer,

  },
});
