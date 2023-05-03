import React, { useState } from "react";
import styles from "../styles/feedback.module.css";

const Feedback = () => {
    const [activeItem, setActiveItem] = useState(5);

    const handleClick = (item: number) => {
        setActiveItem(item);
    };

    return (
        <>
            <ul className={styles.feedback}>
                <li
                    className={`
                        ${styles.angry} ${activeItem === 1 ? styles.active : ""}
                    `}
                    onClick={() => handleClick(1)}
                >
                    <div>
                        <svg className={`${styles.eye} ${styles.left}`}>
                            <use xlinkHref="#eye" />
                        </svg>
                        <svg className={`${styles.eye} ${styles.right}`}>
                            <use xlinkHref="#eye" />
                        </svg>
                        <svg className={styles.mouth}>
                            <use xlinkHref="#mouth" />
                        </svg>
                    </div>
                </li>
                <li
                    className={`${styles.sad} ${
                        activeItem === 2 ? styles.active : ""
                    }`}
                    onClick={() => handleClick(2)}
                >
                    <div>
                        <svg className={`${styles.eye} ${styles.left}`}>
                            <use xlinkHref="#eye" />
                        </svg>
                        <svg className={`${styles.eye} ${styles.right}`}>
                            <use xlinkHref="#eye" />
                        </svg>
                        <svg className={styles.mouth}>
                            <use xlinkHref="#mouth" />
                        </svg>
                    </div>
                </li>
                <li
                    className={`${styles.ok} ${
                        activeItem === 3 ? styles.active : ""
                    }`}
                    onClick={() => handleClick(3)}
                >
                    <div></div>
                </li>
                <li
                    className={`${styles.good} ${
                        activeItem === 4 ? styles.active : ""
                    }`}
                    onClick={() => handleClick(4)}
                >
                    <div>
                        <svg className={`${styles.eye} ${styles.left}`}>
                            <use xlinkHref="#eye" />
                        </svg>
                        <svg className={`${styles.eye} ${styles.right}`}>
                            <use xlinkHref="#eye" />
                        </svg>
                        <svg className={styles.mouth}>
                            <use xlinkHref="#mouth" />
                        </svg>
                    </div>
                </li>
                <li
                    className={`${styles.happy} ${
                        activeItem === 5 ? styles.active : ""
                    }`}
                    onClick={() => handleClick(5)}
                >
                    <div>
                        <svg className={`${styles.eye} ${styles.left}`}>
                            <use xlinkHref="#eye" />
                        </svg>
                        <svg className={`${styles.eye} ${styles.right}`}>
                            <use xlinkHref="#eye" />
                        </svg>
                    </div>
                </li>
            </ul>

            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
                <symbol
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 7 4"
                    id="eye"
                >
                    <path d="M1,1 C1.83333333,2.16666667 2.66666667,2.75 3.5,2.75 C4.33333333,2.75 5.16666667,2.16666667 6,1"></path>
                </symbol>
                <symbol
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 18 7"
                    id="mouth"
                >
                    <path d="M1,5.5 C3.66666667,2.5 6.33333333,1 9,1 C11.6666667,1 14.3333333,2.5 17,5.5"></path>
                </symbol>
            </svg>
        </>
    );
};

export default Feedback;
