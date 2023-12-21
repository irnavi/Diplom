import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./slices/categoriesSlice";
import productsReducer from "./slices/productsSlice";
import saleReducer from "./slices/salePost";
import categoryReducer from "./slices/categorySlice"
import cartReducer from "./slices/cartSlice";
import singleProductReducer from "./slices/singleProduct";

export default configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
    sale: saleReducer,
    category: categoryReducer,
    cart: cartReducer,
    product: singleProductReducer

  },
});
