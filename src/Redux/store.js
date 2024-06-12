import { configureStore } from "@reduxjs/toolkit";
import PersonalCardsReducer from "./slices/PapersSlice";
import PapersReducer from "./slices/PapersSlice";
import CupsReducer from "./slices/CupsSlice";
import BagsReducer from "./slices/BagsSlice";
import UniformReducer from "./slices/UniformSlice";
import CartReducer from "./slices/CartSlice";

export const Store = configureStore({
    reducer: {
        
        PersonalCardsReducer,
         PapersReducer,
         CupsReducer,
         BagsReducer,
         UniformReducer,
         CartReducer



    }
});