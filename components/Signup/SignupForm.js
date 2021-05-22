import styles from "../../styles/signup.module.css";
import { useState } from "react";
import { signup } from "./requests";
import { useLoading } from "../../hooks/loading";

export default function SignupForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [, setLoading] = useLoading();

  const handleSignup = () => {
    setLoading(true);
    signup(username, password).then((auth) => {
      if (auth.token) {
        window.localStorage.setItem(
          "auth",
          btoa(
            JSON.stringify({
              username,
              token: auth.token,
            })
          )
        );
        window.location = "/home";
      }
    });
  };

  return (
    <div className={styles.signupForm}>
      <h2>Signup</h2>

      <div className={styles.signupInput}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          placeholder="Enter username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className={styles.signupInput}>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}
