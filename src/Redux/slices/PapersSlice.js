import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getPapers = createAsyncThunk("papers/getAllpapers", async () => {
    let data = await axios.get('http://localhost:8000/api/categories/12');
    return data.data.products;
    
})
const PapersSlice = createSlice({
    name: "papercard",
    initialState: {
        fav: [],
        papers: [],
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
            .addCase( getPapers.pending, (state) => {
                console.log("pending")
            })
            .addCase( getPapers.fulfilled, (state, action) => {
                console.log(action.payload);
                state.loading = false;
                state.papers = action.payload;
            })
            .addCase( getPapers.rejected, (state, action) => {
                console.log("rejected")
                state.loading = false;
                state.err = true;
            });
    },
})

export const { addToFav } = PapersSlice.actions;

export default PapersSlice.reducer;
