import React, { useState } from "react";
import styles from "../styles/feedback.module.css";

const Feedback = () => {
    // const [activeIndex, setActiveIndex] = useState(3); // initialize with 4th index as active

    // const handleFeedbackClick = (index) => {
    //     setActiveIndex(index);
    // };

    // return (
    //     <div className="w-full flex justify-center">
    //         <ul className="feedback">
    //             <li
    //                 className={`angry ${activeIndex === 0 ? "active" : ""}`}
    //                 onClick={() => handleFeedbackClick(0)}
    //             >
    //                 <div>
    //                     <svg className="eye left">
    //                         <use xlinkHref="#eye"></use>
    //                     </svg>
    //                     <svg className="eye right">
    //                         <use xlinkHref="#eye"></use>
    //                     </svg>
    //                     <svg className="mouth">
    //                         <use xlinkHref="#mouth"></use>
    //                     </svg>
    //                 </div>
    //             </li>
    //             <li
    //                 className={`sad ${activeIndex === 1 ? "active" : ""}`}
    //                 onClick={() => handleFeedbackClick(1)}
    //             >
    //                 <div>
    //                     <svg className="eye left">
    //                         <use xlinkHref="#eye"></use>
    //                     </svg>
    //                     <svg className="eye right">
    //                         <use xlinkHref="#eye"></use>
    //                     </svg>
    //                     <svg className="mouth">
    //                         <use xlinkHref="#mouth"></use>
    //                     </svg>
    //                 </div>
    //             </li>
    //             <li
    //                 className={`ok ${activeIndex === 2 ? "active" : ""}`}
    //                 onClick={() => handleFeedbackClick(2)}
    //             >
    //                 <div></div>
    //             </li>
    //             <li
    //                 className={`good ${activeIndex === 3 ? "active" : ""}`}
    //                 onClick={() => handleFeedbackClick(3)}
    //             >
    //                 <div>
    //                     <svg className="eye left">
    //                         <use xlinkHref="#eye"></use>
    //                     </svg>
    //                     <svg className="eye right">
    //                         <use xlinkHref="#eye"></use>
    //                     </svg>
    //                     <svg className="mouth">
    //                         <use xlinkHref="#mouth"></use>
    //                     </svg>
    //                 </div>
    //             </li>
    //             <li
    //                 className={`happy ${activeIndex === 4 ? "active" : ""}`}
    //                 onClick={() => handleFeedbackClick(4)}
    //             >
    //                 <div>
    //                     <svg className="eye left">
    //                         <use xlinkHref="#eye"></use>
    //                     </svg>
    //                     <svg className="eye right">
    //                         <use xlinkHref="#eye"></use>
    //                     </svg>
    //                 </div>
    //             </li>
    //         </ul>

    //         <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
    //             <symbol
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 viewBox="0 0 7 4"
    //                 id="eye"
    //             >
    //                 <path d="M1,1 C1.83333333,2.16666667 2.66666667,2.75 3.5,2.75 C4.33333333,2.75 5.16666667,2.16666667 6,1"></path>
    //             </symbol>
    //             <symbol
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 viewBox="0 0 18 7"
    //                 id="mouth"
    //             >
    //                 <path d="M1,5.5 C3.66666667,2.5 6.33333333,1 9,1 C11.6666667,1 14.3333333,2.5 17,5.5"></path>
    //             </symbol>
    //         </svg>
    //     </div>
    // );

    const [activeItem, setActiveItem] = useState("happy");

    const handleClick = (item) => {
        setActiveItem(item);
    };

    return (
        <>
            <ul className={styles.feedback}>
                <li
                    className={`
                        ${styles.angry} ${
                        activeItem === "angry" ? styles.active : ""
                    }
                    `}
                    onClick={() => handleClick("angry")}
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
                        activeItem === "sad" ? styles.active : ""
                    }`}
                    onClick={() => handleClick("sad")}
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
                        activeItem === "ok" ? styles.active : ""
                    }`}
                    onClick={() => handleClick("ok")}
                >
                    <div></div>
                </li>
                <li
                    className={`${styles.good} ${
                        activeItem === "good" ? styles.active : ""
                    }`}
                    onClick={() => handleClick("good")}
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
                        activeItem === "happy" ? styles.active : ""
                    }`}
                    onClick={() => handleClick("happy")}
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
