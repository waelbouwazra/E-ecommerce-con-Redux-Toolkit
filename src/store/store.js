import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from './sidebarSlice'
import CategoryReducer from "./CategorySlice";
import productReducer from './productSlice'

const store = configureStore({
    reducer: {
        sidebar: sidebarReducer,
        category: CategoryReducer,
        product: productReducer
    }
})

export default store