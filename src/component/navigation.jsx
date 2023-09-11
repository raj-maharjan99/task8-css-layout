import styles from "./navigation.module.css";

function Section() {
  return (
    <div className={styles.container}>
      <div className={styles.box1}></div>
      <div className={styles.box2}></div>
      <div className={styles.box3}></div>
      <div className={styles.box4}>
        <ul>
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">SAURAHA</a>
          </li>
          <li>
            <a href="#">NARAYANGHAT</a>
          </li>
          <li>
            <a href="#">BHARATPUR</a>
          </li>
          <li>
            <a href="#">TANDI</a>
          </li>
          <li>
            <a href="#">MADI</a>
          </li>
          <li>
            <a href="#">MEGHAULI</a>
          </li>
          <li>
            <a href="#">MUGLIN</a>
          </li>
          <li>
            <a href="#">BHANDARA</a>
          </li>{" "}
        </ul>
      </div>
    </div>
  );
}

export default Section;
