import styles from "./section.module.css";

function Section() {
  return (
    <>
      <nav>
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
          </li>
          <li>
            <a href="#">BHANDARA</a>
          </li>
          <li>
            <a href="#">GALLERY</a>
          </li>

          <li>
            <a href="#">CONTACT</a>
          </li>
        </ul>
      </nav>

      <article>
        <h1>चितवन मा घर छ एक सिङ्गे गैंडा को डर छ </h1>
        <img
          className={styles.rhino}
          src="https://risingnepaldaily.com/storage/media/12080/rhino.jpg"
          alt="rhino in sauraha"
        />
      </article>
    </>
  );
}

export default Section;
