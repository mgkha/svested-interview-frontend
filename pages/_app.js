import "../styles/globals.css";
import styles from "../styles/app.module.css";
import Head from "next/head";
import Link from "next/link";
import { LoadingProvider } from "../hooks/loading";

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.app}>
      <Head>
        <meta name="theme-color" content="#6d1303"></meta>
        <title>Frontend Interview</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.navWrap}>
          <div className={styles.nav}>
            <span className={styles.appName}>
              <Link href="/">
                <a>Svested Frontend Interview</a>
              </Link>
            </span>
          </div>
        </div>
      </header>

      <LoadingProvider>
        <Component {...pageProps} />
      </LoadingProvider>

      <footer className={styles.footer}>
        <span>
          <Link href="https://github.com/mgkha/svested-interview-frontend">
            <a>github.com/mgkha/svested-interview-frontend</a>
          </Link>
        </span>
      </footer>
    </div>
  );
}

export default MyApp;
