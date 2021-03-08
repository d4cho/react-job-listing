import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./filtersSlice";

const reducer = {
    filters: filtersReducer,
};

const store = configureStore({
    reducer,
});

export default store;
