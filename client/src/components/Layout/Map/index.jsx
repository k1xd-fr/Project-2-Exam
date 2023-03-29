import Image from "next/image";
import Map from "./Map";
import styles from "./Map.module.sass";

const MapAndOrder = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>Оплата и доставка</h2>
        <div className={styles.wrapperMap}>
          <div className={styles.infoblog}>
            <div className={styles.blog}>
              <div className={styles.iconBlog}>
                <Image src="/images/icon/card.svg" width={45} height={45} />
              </div>
              <p className={styles.description}>
                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit
              </p>
            </div>
            <div className={styles.blog}>
              <div className={styles.iconBlog}>
                <Image src="/images/icon/car1.svg" width={45} height={45} />
              </div>
              <p className={styles.description}>
                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit
              </p>
            </div>
            <div className={styles.blog}>
              <div className={styles.iconBlog}>
                <Image src="/images/icon/desc.svg" width={45} height={45} />
              </div>
              <p className={styles.description}>
                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit
              </p>
            </div>
            <div className={styles.blog}>
              <div className={styles.iconBlog}>
                <Image src="/images/icon/car2.svg" width={45} height={45} />
              </div>
              <p className={styles.description}>
                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit
              </p>
            </div>
          </div>
          <Map />
        </div>
      </div>
    </div>
  );
};

export default MapAndOrder;
