import styles from "./mainContent.module.css";

function MainContent() {
  return (
    <>
      <div className={styles.container}>
        <img
          src="https://www.worldatlas.com/r/w1200/upload/0f/eb/5a/chitwan-national-park.jpg"
          alt="rhinos"
        ></img>
        <span>Rhino</span>
      </div>
    </>
  );
}

export default MainContent;
