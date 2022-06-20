import GradientLayout from "../components/gradient";
import styles from "./home.module.scss";

const ErrorPage = () => {
  return (
    <GradientLayout>
      <h1 className={styles.header}>Page Not Found.</h1>
    </GradientLayout>
  );
};
export default ErrorPage;
