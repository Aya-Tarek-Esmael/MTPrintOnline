import { configureStore } from "@reduxjs/toolkit";
import PersonalCardsReducer from "./slices/PapersSlice";
import PapersReducer from "./slices/PapersSlice";
import BannerProductsReducer from "./slices/BannerProductsSlice";
import CupsReducer from "./slices/CupsSlice";
import BagsReducer from "./slices/BagsSlice";
import UniformReducer from "./slices/UniformSlice";
import CharctersReducer from "./slices/CharctersSlice";
import PanelsAndFacadesReducer from "./slices/PanelsAndFacadesSlice";
import CartReducer from "./slices/CartSlice";

export const Store = configureStore({
    reducer: {
        
        PersonalCardsReducer,
         PapersReducer,
         BannerProductsReducer,
         CupsReducer,
         BagsReducer,
         UniformReducer,
         CharctersReducer,
         PanelsAndFacadesReducer,
         CartReducer



    }
});