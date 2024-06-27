import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getBags = createAsyncThunk("bags/getAllbags", async () => {
    let data = await axios.get('https://mtb3a.arabiangeeks.net/api/categories/15');
    return data.data.products;
    
})
const BagsSlice = createSlice({
    name: "bagscard",
    initialState: {
        fav: [],
        bags: [],
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
            .addCase( getBags.pending, (state) => {
                console.log("pending")
            })
            .addCase( getBags.fulfilled, (state, action) => {
                console.log(action.payload);
                state.loading = false;
                state.bags = action.payload;
            })
            .addCase( getBags.rejected, (state, action) => {
                console.log("rejected")
                state.loading = false;
                state.err = true;
            });
    },
})

export const { addToFav } = BagsSlice.actions;

export default BagsSlice.reducer;
