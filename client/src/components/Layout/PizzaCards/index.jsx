import { fetchPizzas } from "@/api/requsetPizza";
import Basket from "@/components/ui/Basket/Basket";
import Image from "next/image";
import { useEffect, useState } from "react";
import Item from "./Item";

import styles from "./PizzaCards.module.sass";

const Cards = () => {
  const [show, setShow] = useState(false);

  const trash = () => {
    setShow((show) => !show);
  };
  const [dataPizza, setDataPizza] = useState([]);
  useEffect(() => {
    fetchPizzas().then((data) => {
      setDataPizza(data.data);
    });
  }, []);

  return (
    <div className={styles.menu}>
      <div className={styles.container}>
        <h1 className={styles.title}>Пицца</h1>
        <div className={styles.cards}>
          {dataPizza.map((data) => {
            return <Item data={data} key={data.id} trash={trash} />;
          })}
        </div>
      </div>
      {show && <Basket />}
    </div>
  );
};

export default Cards;
