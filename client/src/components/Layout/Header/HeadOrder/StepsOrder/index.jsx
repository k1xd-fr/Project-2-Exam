import styles from "./style.module.sass";
const StepsOrder = ({first, second ,third, changeNum}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.steps}>
        <div className={styles.step}>
          <p className={first}>1</p>
        </div>
          <span>Корзина</span>
        <hr className={styles.line} />
        <div className={styles.step}>
          <p className={second}>2</p>
        </div>
          <span>Оформление заказа</span>
        <hr className={styles.line}/>
        <div className={styles.step}>
          <p className={third}>{changeNum}</p>
        </div>
          <span>Заказ принят</span>
      </div>
    </div>
  );
};

export default StepsOrder;
