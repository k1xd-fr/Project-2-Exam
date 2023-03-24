import { useState } from "react";
import styles from "./Basket.module.sass";

const Basket = () => {
  return (
    <div className={styles.drawback}>
      <div className={styles.basket}>
        <div className={styles.xz}></div>
      </div>
    </div>
  );
};

export default Basket; 
