import Link from "next/link";
import Layout from "../components/layout";
import styles from "./home.module.scss";

const Home = () => {
  return (
    <Layout>
      <h1 className={styles.header}>Welcome to tylersiskar.com</h1>
      <h3 className={styles.text}>
        Thanks for visiting. Tyler is currently developing this site right now.
        If you're interested in seeing his notes. Go here...
        <Link href="/notes">
          <a className={styles.link}>to dev notes </a>
        </Link>
      </h3>
    </Layout>
  );
};

export default Home;
