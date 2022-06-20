import styles from "./gradient.module.scss";
import classnames from "classnames";

const GradientLayout = ({ children }) => {
  const gradientStyles = classnames(styles.gradient, styles.shape);

  return (
    <div className={styles.background}>
      <div className={gradientStyles} />
      <div style={{ position: "absolute" }}>{children}</div>
    </div>
  );
};
export default GradientLayout;
