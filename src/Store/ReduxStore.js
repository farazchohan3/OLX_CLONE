import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./ProductSlice";
const store = configureStore({
  reducer: {
    products: ProductSlice,
  },
});

export default store;
