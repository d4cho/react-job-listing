import React from "react";

import styles from "./Card.module.css";
import { useDispatch } from "react-redux";
import { addFilter } from "../../../redux/filtersSlice";

const Card = (props) => {
    const dispatch = useDispatch();

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

    const handleClick = (value) => {
        dispatch(addFilter(value));
    };

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
            <div className={styles.filtersContainer}>
                <div onClick={() => handleClick(role)}>{role}</div>
                <div onClick={() => handleClick(level)}>{level}</div>
                {languages.map((language) => (
                    <div onClick={() => handleClick(language)}>{language}</div>
                ))}
                {tools.map((tool) => (
                    <div onClick={() => handleClick(tool)}>{tool}</div>
                ))}
            </div>
        </div>
    );
};

export default Card;
