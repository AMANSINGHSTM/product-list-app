import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async ({ category, searchQuery, limit, skip }) => {
    let url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;
    if (category)
      url = `https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${skip}`;
    if (searchQuery) url += `&q=${searchQuery}`;

    const response = await axios.get(url);
    return response.data.products;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: "idle",
  },
  reducers: {
    clearProducts: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = [...state.items, ...action.payload]; // Append new products
      });
  },
});

export const { clearProducts } = productsSlice.actions;
export default productsSlice.reducer;
