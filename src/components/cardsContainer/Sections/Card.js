import React from "react";

import styles from "./Card.module.css";
import photosnap from "../../../assets/images/photosnap.svg";

const Card = (props) => {
    console.log(props.info);

    const {
        id,
        company,
        logo,
        isNew,
        featured,
        position,
        role,
        level,
        postedAt,
        contract,
        location,
        languages,
        tools,
    } = props.info;

    return (
        <div
            className={
                featured
                    ? [styles.container, styles.featuredContainer].join(" ")
                    : styles.container
            }
        >
            <div className={styles.subContainer}>
                <img
                    className={styles.img}
                    src={`${process.env.PUBLIC_URL}${logo}`}
                    alt="logo"
                />
                <div className={styles.infoContainer}>
                    <div className={styles.companyContainer}>
                        <div className={styles.company}>{company}</div>
                        {isNew && <div className={styles.new}>NEW!</div>}
                        {featured && (
                            <div className={styles.featured}>FEATURED</div>
                        )}
                    </div>
                    <div className={styles.position}>{position}</div>
                    <div className={styles.jobInfo}>
                        <div>{postedAt}</div>
                        <div>&#183;</div>
                        <div>{contract}</div>
                        <div>&#183;</div>
                        <div>{location}</div>
                    </div>
                </div>
            </div>
            {/* working on this now */}
            <div className={styles.filtersContainer}>
                <div>{role}</div>
                <div>{level}</div>
                {languages.map((language) => (
                    <div>{language}</div>
                ))}
                {tools.map((tool) => (
                    <div>{tool}</div>
                ))}
            </div>
        </div>
    );
};

export default Card;
