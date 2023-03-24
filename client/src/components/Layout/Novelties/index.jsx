import Image from "next/image";
import styles from "./Novelties.module.sass";

const Novelties = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.newsTitle}>Новинки</h1>
      <div className={styles.news}>
        <div className={styles.newsCard}>
          <Image src="/images/pizza/karbon.png" width={70} height={70}  className={styles.img} />
          <div className={styles.pizzaDesc}>
            <h5 className={styles.pizzaTitle}>Карбонара</h5>
            <span className={styles.pizzaPrice}>от 120 ₽</span>
          </div>
        </div>

        <div className={styles.newsCard}>
          <Image src="/images/pizza/karbon.png" width={70} height={70}  className={styles.img} />
          <div className={styles.pizzaDesc}>
            <h5 className={styles.pizzaTitle}>Карбонара</h5>
            <span className={styles.pizzaPrice}>от 120 ₽</span>
          </div>
        </div>

        <div className={styles.newsCard}>
          <Image src="/images/pizza/karbon.png" width={70} height={70}  className={styles.img} />
          <div className={styles.pizzaDesc}>
            <h5 className={styles.pizzaTitle}>Карбонара</h5>
            <span className={styles.pizzaPrice}>от 120 ₽</span>
          </div>
        </div>

        <div className={styles.newsCard}>
          <Image src="/images/pizza/karbon.png" width={70} height={70}  className={styles.img} />
          <div className={styles.pizzaDesc}>
            <h5 className={styles.pizzaTitle}>Карбонара</h5>
            <span className={styles.pizzaPrice}>от 120 ₽</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Novelties;
