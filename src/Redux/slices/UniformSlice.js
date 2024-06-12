import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getUniform = createAsyncThunk("papers/getAllpapers", async () => {
    let data = await axios.get('http://localhost:8000/api/categories/13');
    return data.data.products;
    
})
const UniformSlice = createSlice({
    name: "papercard",
    initialState: {
        fav: [],
        uniform: [],
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
            .addCase( getUniform.pending, (state) => {
                console.log("pending")
            })
            .addCase( getUniform.fulfilled, (state, action) => {
                console.log(action.payload);
                state.loading = false;
                state.uniform = action.payload;
            })
            .addCase( getUniform.rejected, (state, action) => {
                console.log("rejected")
                state.loading = false;
                state.err = true;
            });
    },
})

export const { addToFav } = UniformSlice.actions;

export default UniformSlice.reducer;
