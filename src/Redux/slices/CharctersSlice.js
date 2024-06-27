import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getCharcters = createAsyncThunk("charcters/getAllcharcters", async () => {
    let data = await axios.get('https://mtb3a.arabiangeeks.net/api/categories/11');
    return data.data.products;
    
})
const CharctersSlice = createSlice({
    name: "charcterscard",
    initialState: {
        fav: [],
        charcters: [],
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
            .addCase( getCharcters.pending, (state) => {
                console.log("pending")
            })
            .addCase( getCharcters.fulfilled, (state, action) => {
                console.log(action.payload);
                state.loading = false;
                state.charcters = action.payload;
            })
            .addCase( getCharcters.rejected, (state, action) => {
                console.log("rejected")
                state.loading = false;
                state.err = true;
            });
    },
})

export const { addToFav } = CharctersSlice.actions;

export default CharctersSlice.reducer;
