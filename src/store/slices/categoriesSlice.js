import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



 export const fetchCategories = createAsyncThunk('products/fetchCategories', async () => {
    try {
        const response = await fetch('http://localhost:3333/categories/all');
        const data = await response.json();
        
        return data;
        
    } catch (error) {
        console.log(error);
    }
});


export const categoriesSlice = createSlice({
    name: 'categories',

    initialState: {
        categoriesList: [],
    },

    extraReducers: (builder) => {
        builder
        .addCase(fetchCategories.pending, (state, action) => {})
        .addCase(fetchCategories.fulfilled, (state, action) => {
            state.categoriesList = action.payload;
        })
        .addCase(fetchCategories.rejected, (state, action) => {})


    }
})

export default categoriesSlice.reducer;
