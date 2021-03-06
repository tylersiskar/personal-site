import Link from "next/link";
import React, { useEffect, useState } from "react";
import Layout from "../../components/layout";
import styles from "./notes.module.scss";
import ReactMarkdown from "react-markdown";

const API_BASE_URL = process.env.API_BASE_URL;
const API_SPACE_ID = process.env.API_SPACE_ID;
const API_TOKEN = process.env.API_TOKEN;

export async function getStaticProps() {
  let url = new URL(
    `${API_BASE_URL}/spaces/${API_SPACE_ID}/environments/master/entries?access_token=${API_TOKEN}`
  );
  const res = await fetch(url);
  const posts = await res.json();
  return {
    props: {
      posts: posts.items,
    },
  };
}
const Notes = ({ posts }) => {
  const [notes, setNotes] = useState(posts);

  useEffect(() => {
    /** This is just to ignore the content from tcsiskar.com */
    let devNotes = posts.filter((post) => post.fields.hasOwnProperty("date"));
    setNotes(devNotes);
  }, [posts]);
  return (
    <Layout>
      <Link href="/">
        <a className={styles.link}> Back to home </a>
      </Link>
      {notes?.map((note, i) => {
        return (
          <div key={i} className={styles.card}>
            <div style={{ display: "inline-flex" }}>
              <h6 className={styles.text}>{note.fields.date}•</h6>
              <h6 className={styles.text}>{note.fields.title}</h6>
            </div>
            <div className={styles.description}>
              <ReactMarkdown className={styles.description}>
                {note.fields.description}
              </ReactMarkdown>
            </div>
          </div>
        );
      })}
    </Layout>
  );
};
export default Notes;
