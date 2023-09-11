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

        <h1>JAY GANESH</h1>
      </div>
    </>
  );
}

export default Header;
