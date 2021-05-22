import styles from "@/styles/components/alphabet.module.css";

export default function Alphabet(props) {
  return <div className={styles.gridItem}>{props.children}</div>;
}
