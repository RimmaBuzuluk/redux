import { applyMiddleware, combineReducers, configureStore } from "@reduxjs/toolkit";
import { cashReducer } from "./cashReduser";
import { composeWithDevTools } from "redux-devtools-extension";
import { customersReducer } from "./customersReduser";
import { thunk } from "redux-thunk";


const rootReducer=combineReducers({
    cash:cashReducer,
    customers:customersReducer
})

export const store= configureStore({
    reducer:rootReducer
    
},
composeWithDevTools(applyMiddleware(thunk)))