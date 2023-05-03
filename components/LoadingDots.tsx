import styles from "../styles/loading-dots.module.css";

const LoadingDots = () => {
    return (
        <span className={styles.loading}>
            <span className="bg-white" />
            <span className="bg-white" />
            <span className="bg-white" />
        </span>
    );
};

export default LoadingDots;

LoadingDots.defaultProps = {
    style: "small",
};
