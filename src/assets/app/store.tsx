import { configureStore } from "@reduxjs/toolkit";
import { jokAPI } from "./service/JokAPI";
import { setupListeners } from "@reduxjs/toolkit/query";
export const store = configureStore({
    reducer:{

        [jokAPI.reducerPath]: jokAPI.reducer,
    },
    middleware:(getDefaultMiddleware)=> 
        getDefaultMiddleware().concat(jokAPI.middleware)
})



setupListeners(store.dispatch)