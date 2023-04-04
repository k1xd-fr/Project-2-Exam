import { useState } from "react";
import styles from "./style.module.sass";

export const PlusMinus = ({ num }) => {
  const [count, setCount] = useState(0);
  return (
    <div className={styles.plusMinus}>
      <span onClick={()=> setCount(count - 1)}>-</span>
      <span>{count}</span>
      <span onClick={()=> setCount(count + 1)}>+</span>
    </div>
  );
};
