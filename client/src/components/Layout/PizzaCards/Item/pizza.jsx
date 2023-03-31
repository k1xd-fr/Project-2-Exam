import styles from "../PizzaCards.module.sass";
import Image from "next/image";

const Item = ({ data }) => {
  return (
    <div>
      <div className={styles.card}>
        <Image
          src={data.img.url}
          priority
          width={253}
          height={253}
          className={styles.cardImage}
          alt={data.img.name}
        />
        <div className={styles.cardDescription}>
          <h4 className={styles.cardTitle}>{data.Name}</h4>
          <p className={styles.description}>{data.description}</p>
          <div className={styles.priceBasket}>
            <h5 className={styles.price}>от {data.Price}₽</h5>
            <button className={styles.basketBtn}>В корзину</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
