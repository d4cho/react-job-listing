import React from "react";

import styles from "./CardsContainer.module.css";
import data from "../../data.json";
import Card from "./Sections/Card";
import { useSelector } from "react-redux";
import _ from "lodash";

const CardsContainer = () => {
    const filters = useSelector((state) => state.filters.filters);

    const renderCards = () => {
        if (filters.length === 0) {
            return data.map((listing, idx) => (
                <Card key={listing.id} info={listing} />
            ));
        } else {
            let filteredData = data.filter((listing) => {
                let arr = _.concat(
                    listing.role,
                    listing.level,
                    listing.languages,
                    listing.tools
                );

                // checks if arr includes every filter in filters
                if (filters.every((filter) => _.includes(arr, filter))) {
                    return listing;
                }
            });
            return filteredData.map((listing, idx) => (
                <Card key={listing.id} info={listing} />
            ));
        }
    };

    return <div className={styles.container}>{renderCards()}</div>;
};

export default CardsContainer;
