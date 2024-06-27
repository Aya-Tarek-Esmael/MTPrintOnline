import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getBannerProducts = createAsyncThunk("banners/getAllbanners", async () => {
    let data = await axios.get('https://mtb3a.arabiangeeks.net/api/categories/12');
    return data.data.products;
    
})
const BannerProductsSlice = createSlice({
    name: "BannerProductcard",
    initialState: {
        fav: [],
        BannerProducts: [],
        loading: true,
        err: false
    },
    reducers: {
        addToFav: (state, action) => {
            state.fav.push({ ...action.payload, quantify: 1 });
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase( getBannerProducts.pending, (state) => {
                console.log("pending")
            })
            .addCase( getBannerProducts.fulfilled, (state, action) => {
                console.log(action.payload);
                state.loading = false;
                state.BannerProducts = action.payload;
            })
            .addCase( getBannerProducts.rejected, (state, action) => {
                console.log("rejected")
                state.loading = false;
                state.err = true;
            });
    },
})

export const { addToFav } =BannerProductsSlice.actions;

export default BannerProductsSlice.reducer;
