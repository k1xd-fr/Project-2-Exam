import { useState } from "react";
import styles from "./Basket.module.sass";

const Basket = ({ click, close }) => {
  return (
    <div className={styles.drawback}>
      <div className={styles.basket}>
        <div className={styles.xz}></div>
      </div>
      <p className={styles.close} onClick={click}>
        &#215;
      </p>
    </div>
  );
};

export default Basket;
