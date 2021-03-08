import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFilter, removeFilter, removeAll } from "../../redux/filtersSlice";

const Filter = () => {
    const dispatch = useDispatch();
    const filters = useSelector((state) => state.filters.filters);

    return (
        <div>
            <h1>FILTERS</h1>
            <div>{filters}</div>
            <button onClick={() => dispatch(addFilter("test"))}>
                add filter
            </button>
            <button onClick={() => dispatch(removeFilter("test"))}>
                remove filter
            </button>
            <button onClick={() => dispatch(removeAll())}>remove all</button>
        </div>
    );
};

export default Filter;
