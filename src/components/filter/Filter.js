import React from "react";
import styles from "./Filter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { removeFilter, removeAll } from "../../redux/filtersSlice";

const Filter = () => {
    const dispatch = useDispatch();
    const filters = useSelector((state) => state.filters.filters);

    const renderFilters = () => {
        return filters.map((filter) => (
            <div className={styles.filter}>
                <span className={styles.filterText}>{filter}</span>
                <span
                    className={styles.x}
                    onClick={() => dispatch(removeFilter(filter))}
                >
                    &#10006;
                </span>
            </div>
        ));
    };

    if (filters.length > 0) {
        return (
            <div className={styles.container}>
                <div className={styles.filterContainer}>{renderFilters()}</div>
                <div
                    className={styles.clear}
                    onClick={() => dispatch(removeAll())}
                >
                    Clear
                </div>
            </div>
        );
    } else {
        return null;
    }
};

export default Filter;
