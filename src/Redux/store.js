import { configureStore } from "@reduxjs/toolkit";
import PersonalCardsReducer from "./slices/PapersSlice";
import PapersReducer from "./slices/PapersSlice";
import CartReducer from "./slices/CartSlice";

export const Store = configureStore({
    reducer: {
        
        PersonalCardsReducer,
         PapersReducer,
         CartReducer



    }
});