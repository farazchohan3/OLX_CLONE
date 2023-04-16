import { createSlice } from "@reduxjs/toolkit";
import { products } from "../Store";

const ProductSlice = createSlice({
  name: "products",
  initialState: products,
});

export default ProductSlice.reducer;
