import styles from "../style.module.sass";

export const BonusCard = () => {
  return (
    <div className={styles.bonus}>
      <img src="./img/Gift.svg" alt="Gift" />
      <p>Бонусы появятся здесь после заказа</p>
    </div>
  );
};
