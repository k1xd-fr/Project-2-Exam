import styles from "../PizzaCards.module.sass";
import Image from "next/image";

const Item = ({trash , data}) => {
  return (
    <div>
      <div className={styles.card}>
        {/* <Image
          src={data}
          width={253}
          height={253}
          className={styles.cardImage}
          alt={data.Pizza.name}
        /> */}
        <div className={styles.cardDescription}>
          <h4 className={styles.cardTitle}>
           {data.Name}
          </h4>
          <p className={styles.description}>
           {data.description}
          </p>
          <div className={styles.priceBasket}>
            <h5 className={styles.price}>от {data.Price}₽</h5>
            <button className={styles.basketBtn} onClick={trash}>
              В корзину
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
