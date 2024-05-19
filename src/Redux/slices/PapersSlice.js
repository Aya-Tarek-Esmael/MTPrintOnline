import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getPapers = createAsyncThunk("movie/getAllmovie", async () => {
    let data = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=7a1c19ea3c361a4d3cc53eb70ef8298c");
    return data.data.results;
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
