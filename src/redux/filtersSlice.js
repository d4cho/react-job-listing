import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filters: [],
};

const filtersSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        addFilter: (state, action) => {
            let check = state.filters.find(
                (filter) => filter === action.payload
            );
            if (!check) {
                state.filters.push(action.payload);
            }
        },

        removeFilter: (state, action) => {
            let newFilter = state.filters.filter(
                (filter) => filter !== action.payload
            );
            state.filters = newFilter;
        },

        removeAll: (state, action) => {
            state.filters = [];
        },
    },
});

export const { addFilter, removeFilter, removeAll } = filtersSlice.actions;

export default filtersSlice.reducer;
