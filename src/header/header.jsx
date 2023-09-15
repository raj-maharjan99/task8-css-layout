import styles from "./header.module.css";

function Header() {
  return (
    <>
      <div className={styles.header}>
        <img
          className={styles.image}
          src="https://w7.pngwing.com/pngs/193/452/png-transparent-lord-ganesh-thumbnail.png"
          alt="ganesh Logo"
        />

        <marquee behavior="alternet" direction="right">
          <h1>"हजुर को ध्यान कता चितवन कार्ड कलेक्सन यता"</h1>
        </marquee>
      </div>
      <div className={styles.header}>
        <img
          className={styles.image}
          src="https://w7.pngwing.com/pngs/193/452/png-transparent-lord-ganesh-thumbnail.png"
          alt="ganesh Logo"
        />

        <marquee className={styles.marq} behavior="alternet" direction="left">
          <h1>
            "In the end, we will remember not the words of our enemies, but the
            silence of our friends." - Martin Luther King Jr."
          </h1>
        </marquee>
      </div>
    </>
  );
}

export default Header;
