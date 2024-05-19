import { configureStore } from "@reduxjs/toolkit";
import PersonalCardsReducer from "./slices/PapersSlice";
import PapersReducer from "./slices/PapersSlice";
export const Store = configureStore({
    reducer: {
        
        PersonalCardsReducer,
         PapersReducer



    }
});