import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getBags = createAsyncThunk("papers/getAllpapers", async () => {
    let data = await axios.get('http://localhost:8000/api/categories/13');
    return data.data.products;
    
})
const BagsSlice = createSlice({
    name: "papercard",
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
