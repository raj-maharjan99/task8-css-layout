import styles from "./navigation.module.css";

function Section() {
  return (
    <div className={styles.container}>
      <div className={styles.box1}>
        <a href="#" target="_blank">
          <img
            src="https://i2.wp.com/www.mythoworld.com/wp-content/uploads/2021/03/46064645912_99ff7bccf8_o-e1615663566679.png?fit=1000%2C750&ssl=1"
            alt="shivaji"
            className={styles.logo}
          />
        </a>
        <img
          src="https://i.pinimg.com/originals/ff/4a/65/ff4a657161e52ab60240fa655e9db5d6.jpg"
          className={styles.logo}
        />
      </div>

      <div className={styles.box2}>
        <img
          src="https://media.post.rvohealth.io/wp-content/uploads/sites/4/2022/01/couple-silhouette-sunset-holding-hands-walking-grass-1296x728-header-1024x575.jpg"
          alt="love"
          className={styles.logo}
        />
        <img
          src="https://static.toiimg.com/photo/100963164.cms"
          alt="Rhino"
          className={styles.logo}
        />
      </div>
      <div className={styles.box3}>
        <img
          src="https://i.natgeofe.com/n/05ecc07c-c0e3-4d94-9e32-93ba1e9110ed/white-tailed-deer_thumb_4x3.JPG"
          alt="deer"
          className={styles.logo}
        />
        <img
          src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/ohio-birds/EasternBluebirdPair.jpg?crop=0%2C0%2C3000%2C1650&wid=4000&hei=2200&scl=0.75"
          alt="bird"
          className={styles.logo}
        />
      </div>
      <div className={styles.box4}>
        <ul>
          <h2>TYPES OF ECARDS</h2>
          <li>
            <a
              href="https://www.bluemountain.com/ecards/birthday"
              className={styles.logo}
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
            <a href="#">
              <b>CONTACT</b>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Section;
