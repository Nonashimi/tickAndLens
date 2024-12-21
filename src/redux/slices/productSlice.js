import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";

export const fetchProductsByCategoryAndBrand = createAsyncThunk(
    "products/fetchProductsByCategoryAndBrand",
    async ({id}) => {
      try {
          const url = `/categories/${id}/products?page=0&pageSize=20`;
        const response = await api.get(url);
        return response.data; // Array of products
      } catch (error) {
         alert((error.response?.data?.message || "Failed to fetch products"));
      }
    }
);


export const fetchProduct = createAsyncThunk("products/id", async(id) =>{
  try{
    const urlProduct = `/products/${id}`;
    const responce = await api.get(urlProduct);
    return responce.data;
  }catch(error){
    console.log(error);
  }
})

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    product: {},
    brands: [],
    loading: false,
    error: null,
  },
  reducers: {
    setBrands(state, action) {
      state.brands = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
        .addCase(fetchProductsByCategoryAndBrand.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchProductsByCategoryAndBrand.fulfilled, (state, action) => {
          state.loading = false;
          state.items = action.payload;
        })
        .addCase(fetchProductsByCategoryAndBrand.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });

    builder .addCase(fetchProduct.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action.payload;
    })
    .addCase(fetchProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { setBrands } = productSlice.actions;
export default productSlice.reducer;
