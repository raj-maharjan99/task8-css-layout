import styles from "./navigation.module.css";

function Section() {
  return (
    <div className={styles.container}>
      <div className={styles.box1}></div>
      <div className={styles.box2}></div>
      <div className={styles.box3}></div>
      <div className={styles.box4}>
        <ul>
          <h2>TYPES OF ECARDS</h2>
          <li>
            <a
              href="https://www.bluemountain.com/ecards/birthday"
              target="_blank"
            >
              BIRTHDAY
            </a>
          </li>
          <li>
            <a
              href="https://www.bluemountain.com/ecards/anniversary"
              target="_blank"
            >
              ANNIVERSARY
            </a>
          </li>
          <li>
            <a
              href="https://www.bluemountain.com/ecards/friendship"
              target="_blank"
            >
              FRIENDSHIP
            </a>
          </li>
          <li>
            <a
              href="https://www.bluemountain.com/ecards/congratulations"
              target="_blank"
            >
              CONGRATULATION
            </a>
          </li>
          <li>
            <a
              href="https://www.bluemountain.com/ecards/dating-and-love"
              target="_blank"
            >
              LOVE
            </a>
          </li>
          <li>
            <a
              href="https://www.bluemountain.com/ecards/sympathy"
              target="_blank"
            >
              SYMPATHY
            </a>
          </li>
          <li>
            <a
              href="https://www.shutterstock.com/search/indian-god-ganesha?ds_ag=FF%3DDSA%20-%20All%20Pages_AU%3DProspecting&ds_agid=58700003504592959&ds_cid=71700000027388020&ds_eid=700000001400310&gclid=Cj0KCQjw0vWnBhC6ARIsAJpJM6cmTcRAX2UfLyp5qk2BIzvcVyLzgUnLkWI4EYash01MDSf7CPFPsN8aAsabEALw_wcB&gclsrc=aw.ds&kw=&utm_campaign=CO%3DUS_LG%3DEN_BU%3DIMG_AD%3DDSA_TS%3Dlggeneric_RG%3DAMER_AB%3DACQ_CH%3DSEM_OG%3DCONV_PB%3DGoogle&utm_medium=cpc&utm_source=GOOGLE"
              target="_blank"
            >
              GOD GANESH
            </a>
          </li>
          <li>
            <a href="rjuallone@gmail.com">
              <b>CONTACT</b>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Section;
