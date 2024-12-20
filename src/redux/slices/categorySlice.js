import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

// 1. Define the initial state with a conventional name
const initialState = {
    categories: [],
    loading: false,
    error: null
};

// 2. Create an asynchronous thunk action for fetching categories
export const FetchCategories = createAsyncThunk(
    "categories/fetchCategories", // More descriptive action type
    async (_, { rejectWithValue }) => { // Destructure rejectWithValue for better error handling
        try {
            const response = await api.get("http://localhost:9000/categories/list");
            return response.data;
        } catch (error) {
            // Check if the error has a response from the server
            if (error.response && error.response.data) {
                return rejectWithValue(error.response.data);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);

// 3. Create the slice
const categorySlice = createSlice({
    name: "category",
    initialState, // Use initialState instead of state
    reducers: {
        // Define synchronous reducers here if needed
    },
    extraReducers: (builder) => {
        builder
            // Handle the pending state
            .addCase(FetchCategories.pending, (state) => {
                state.loading = true;
                state.error = null; // Reset error on new fetch
            })
            // Handle the fulfilled state
            .addCase(FetchCategories.fulfilled, (state, action) => {
                state.loading = false;
                state.categories = action.payload;
            })
            // Handle the rejected state
            .addCase(FetchCategories.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Failed to fetch categories";
            });
    }
});

// 4. Export the reducer with a conventional name
export const categoryReducer = categorySlice.reducer;
