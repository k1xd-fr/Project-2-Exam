import Image from "next/image";
import styles from "./Action.module.sass";

const index = () => {
  return (
    <div className={styles.actionContainer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.actionTitle}>
            Наши <span className={styles.span}>акции</span>
          </h2>
          <div className={styles.mainImage}>
            <Image
              src="/images/pizza/action-img1.png"
              width={540}
              height={407}
              alt="action-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
