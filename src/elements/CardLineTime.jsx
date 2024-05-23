import styles from "./CardLineTime.module.css";

function TimeLineTime({ ano, texto, lineLeft, ball, lineRight }) {
  return (
    <div className={styles.timeCard}>
      <div className={styles.timeline}>
        {lineLeft && <div className={styles.line}></div>}
        <div className={styles.ballContainer}>
          {ball && <div className={styles.ball}></div>}
          <div className={styles.year}>{ano}</div>
        </div>
        {lineRight && <div className={styles.line}></div>}
      </div>
      <div className={styles.text}>{texto}</div>
    </div>
  );
}

export default TimeLineTime;
