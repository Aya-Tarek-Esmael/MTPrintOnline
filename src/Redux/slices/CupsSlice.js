import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getCups = createAsyncThunk("cups/getAllcups", async () => {
    let data = await axios.get('https://mtb3a.arabiangeeks.net/api/categories/14');
    return data.data.products;
    
})
const CupsSlice = createSlice({
    name: "cupscard",
    initialState: {
        fav: [],
        cups: [],
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
            .addCase( getCups.pending, (state) => {
                console.log("pending")
            })
            .addCase( getCups.fulfilled, (state, action) => {
                console.log(action.payload);
                state.loading = false;
                state.cups = action.payload;
            })
            .addCase( getCups.rejected, (state, action) => {
                console.log("rejected")
                state.loading = false;
                state.err = true;
            });
    },
})

export const { addToFav } = CupsSlice.actions;

export default CupsSlice.reducer;
