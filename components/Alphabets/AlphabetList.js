import styles from "../../styles/components/alphabet.module.css";
import Alphabet from "./Alphabet";

export default function AlphabetList({ alphabets }) {
  return (
    <>
      {alphabets.length > 0 && (
        <span className={styles.count}>Count: {alphabets.length}</span>
      )}
      <div className={styles.gridContainer}>
        <div className={styles.gridLayout}>
          {alphabets.map((alphabet, index) => (
            <Alphabet key={index}>{alphabet.randAlphabet}</Alphabet>
          ))}
        </div>
      </div>
    </>
  );
}
