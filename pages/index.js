import Link from "next/link";
import styles from "./home.module.scss";
import GradientLayout from "../components/gradient";

const Home = () => {
  return (
    <GradientLayout>
      <div className={styles.textWrapper}>
        <h1 className={styles.header}>Welcome.</h1>
        <h3 className={styles.text}>
          Thanks for visiting. Tyler is currently developing this site right
          now. If you're interested in seeing his notes. Go here...
          <Link href="/notes">
            <a className={styles.link}>to dev notes </a>
          </Link>
        </h3>
      </div>
    </GradientLayout>
  );
};

export default Home;
