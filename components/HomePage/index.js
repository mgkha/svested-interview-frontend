import { useState, useEffect } from "react";
import styles from "@/styles/components/homepage.module.css";
import AlphabetList from "@/components/Alphabets/AlphabetList";
import { fetchData, processData } from "./requests";

export default function HomePage() {
  const [username, setUsername] = useState("Anonymous");
  const [token, setToken] = useState();
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("");

  const handleProcess = () => {
    processData(token)
      .then(() => {
        setStatus("Processed data!");
      })
      .catch((err) => alert(err));
  };

  const handleFetch = () => {
    fetchData()
      .then((data) => {
        setData(data.data);
        setStatus("Fetched data!");
      })
      .catch((err) => alert(err));
  };

  useEffect(() => {
    var auth = window.localStorage.getItem("auth");
    auth = auth && JSON.parse(atob(auth));
    if (auth) {
      setUsername(auth.username);
      setToken(auth.token);
    }
  }, []);

  return (
    <>
      <h1 className={styles.title}>Welcome! {username}</h1>
      <div className={styles.action}>
        <button className={styles.actionBtn} onClick={handleProcess}>
          Process
        </button>
        <button className={styles.actionBtn} onClick={handleFetch}>
          Fetch
        </button>
      </div>

      <span className={styles.status}>{status}</span>

      <AlphabetList alphabets={data} />
    </>
  );
}
