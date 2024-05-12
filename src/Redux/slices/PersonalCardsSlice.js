import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getPersonalCards = createAsyncThunk("movie/getAllmovie", async () => {
    let data = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=7a1c19ea3c361a4d3cc53eb70ef8298c");
    return data.data.results;
})
const PersonalCardsSlice = createSlice({
    name: "personalcard",
    initialState: {
        fav: [],
        personalcards: [],
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
            .addCase(getPersonalCards.pending, (state) => {
                console.log("pending")
            })
            .addCase(getPersonalCards.fulfilled, (state, action) => {
                console.log(action.payload);
                state.loading = false;
                state.personalcards = action.payload;
            })
            .addCase(getPersonalCards.rejected, (state, action) => {
                console.log("rejected")
                state.loading = false;
                state.err = true;
            });
    },
})

export const { addToFav } = PersonalCardsSlice.actions;

export default PersonalCardsSlice.reducer;
