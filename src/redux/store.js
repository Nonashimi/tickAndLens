import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import { categoryReducer } from "./slices/categorySlice";
import { BacketReducer } from "./slices/backetSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    categories: categoryReducer,
    backet: BacketReducer
  },
});
