import React from "react";

import styles from "./CardsContainer.module.css";
import data from "../../data.json";
import Card from "./Sections/Card";

const CardsContainer = () => {
    const renderCards = data.map((listing, idx) => (
        <Card key={listing.id} info={listing} />
    ));

    return <div className={styles.container}>{renderCards}</div>;
};

export default CardsContainer;
