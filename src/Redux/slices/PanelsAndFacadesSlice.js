import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getPanelsAndFacades = createAsyncThunk("PanelsAndFacades/getAllPanelsAndFacades", async () => {
    let data = await axios.get('http://localhost:8000/api/categories/11');
    return data.data.products;
    
})
const PanelsAndFacadesSlice = createSlice({
    name: "PanelsAndFacadescard",
    initialState: {
        fav: [],
        PanelsAndFacades: [],
        loading: true,
        err: false
    },
    reducers: {
        addToFav: (state, action) => {
            state.fav.push({ ...action.payload, quantity: 1 });
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase( getPanelsAndFacades.pending, (state) => {
                console.log("pending")
            })
            .addCase( getPanelsAndFacades.fulfilled, (state, action) => {
                console.log(action.payload);
                state.loading = false;
                state.PanelsAndFacades = action.payload;
            })
            .addCase( getPanelsAndFacades.rejected, (state, action) => {
                console.log("rejected")
                state.loading = false;
                state.err = true;
            });
    },
})

export const { addToFav } = PanelsAndFacadesSlice.actions;

export default PanelsAndFacadesSlice.reducer;
