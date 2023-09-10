import styles from "./header.module.css";

function Header() {
  return (
    <>
      <div className={styles.header}>
        <img
          className={styles.image}
          src="https://static.vecteezy.com/system/resources/thumbnails/006/423/232/small/rhino-head-icon-logo-in-a-circle-for-company-community-and-more-free-vector.jpg"
          alt="Logo"
        />

        <h1>HAMRO CHITWAN RAMRO CHITWAN</h1>
        <img
          className={styles.image1}
          src="https://i.pinimg.com/564x/9f/b4/aa/9fb4aa6b740cc3280285021f77d92f91.jpg"
          alt="Logo"
        />
      </div>
    </>
  );
}

export default Header;
