import Image from "next/image";
import styles from "./MainAction.module.sass";

const MainAction = () => {
  return (
    <div className={styles.mainAction}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.actionTitle}>
            Наши <span className={styles.span}>акции</span>
          </h2>
          <div className={styles.images}>
            <div className={styles.mainImage}>
              <Image
                src="/images/action/MainAction.png"
                width={540}
                height={407}
                alt="action-image"
              />
            </div>
            <div className={styles.mainImage}>
              <Image
                src="/images/action/MainAction2.png"
                width={256}
                height={189}
                alt="action-image"
              />
            </div>
            <div className={styles.mainImage}>
              <Image
                src="/images/action/MainAction2.png"
                width={256}
                height={189}
                alt="action-image"
              />
            </div>
            <div className={styles.mainImage}>
              <Image
                src="/images/action/MainAction2.png"
                width={256}
                height={189}
                alt="action-image"
              />
            </div>
            <div className={styles.mainImage}>
              <Image
                src="/images/action/MainAction2.png"
                width={256}
                height={189}
                alt="action-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainAction;
