// src/store/slices/basketSlice.js

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

// 1. Define the initial state with a conventional name
const initialState = {
  basket: [],
  loading: false,
  error: null,
};

// 2. Create an asynchronous thunk action for fetching the basket
export const fetchBasket = createAsyncThunk(
  "basket/fetchBasket",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/basket/view"); // Assuming baseURL is set in api
      return response.data;
    } catch (error) {
      // Check if the error has a response from the server
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message || "An unknown error occurred.");
      }
    }
  }
);
export const removeFromBasket = createAsyncThunk(
    "basket/removeItem",
    async ({ id }, { rejectWithValue }) => {
        try {
            const url = `http://localhost:9000/basket/remove?productId=${id}`;
            const response = await api.delete(url);
            return response.data;
        } catch (error) {
            if (error.response && error.response.data) {
                return rejectWithValue(error.response.data);
            }
            return rejectWithValue(error.message);
        }
    }
);


// 3. Create an asynchronous thunk action for adding items to the basket
export const addToBasket = createAsyncThunk(
  "add/addToBasket",
  async ({ id, quantity }, { rejectWithValue }) => {
    try {
        const url = `/basket/add?productId=${id}&quantity=${quantity}`;
      const response = await api.post(url);
      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message || "An unknown error occurred.");
      }
    }
  }
);

// 4. Create the basket slice
const basketSlice = createSlice({
  name: "basket",
  initialState, // Use initialState instead of state
  reducers: {
    // Define synchronous reducers here if needed
    clearBasket: (state) => {
      state.basket = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Handle fetchBasket actions
    builder
      .addCase(fetchBasket.pending, (state) => {
        state.loading = true;
        state.error = null; // Reset error on new fetch
      })
      .addCase(fetchBasket.fulfilled, (state, action) => {
        state.loading = false;
        state.basket = action.payload;
      })
      .addCase(fetchBasket.rejected, (state, action) => {
        state.loading = false;
        state.basket = [];
        state.error = action.payload || "Failed to fetch basket.";
      });

    // Handle addToBasket actions
    builder
      .addCase(addToBasket.pending, (state) => {
        state.loading = true;
        state.error = null; // Reset error on new action
      })
      .addCase(addToBasket.fulfilled, (state, action) => {
        state.loading = false;
        state.basket = action.payload;
      })
      .addCase(addToBasket.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to add item to basket.";
      });


      builder
      .addCase(removeFromBasket.pending, (state) => {
        state.loading = true;
        state.error = null; 
      })
      .addCase(removeFromBasket.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(removeFromBasket.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to remove item to basket.";
      });
  },
});

export const BacketReducer = basketSlice.reducer;
