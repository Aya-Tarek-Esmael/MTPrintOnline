import { configureStore } from "@reduxjs/toolkit";
import PersonalCardsReducer from "./slices/PersonalCardsSlice";
export const Store = configureStore({
    reducer: {
        
        PersonalCardsReducer


    }
});