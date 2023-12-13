import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



 export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    try {
        const response = await fetch('http://localhost:3333/products/all');
        const data = await response.json();
        
        return data;
        
    } catch (error) {
        console.log(error);
    }
});


export const productsSlice = createSlice({
    name: 'products',

    initialState: {
        productsList: [],
    },

    extraReducers: (builder) => {
        builder
        .addCase(fetchProducts.pending, (state, action) => {})
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.productsList = action.payload;
        })
        .addCase(fetchProducts.rejected, (state, action) => {})


    }
})

export default productsSlice.reducer;
