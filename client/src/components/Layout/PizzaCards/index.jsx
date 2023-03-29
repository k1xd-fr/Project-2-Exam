import {
  fetchCombos,
  fetchDeserts,
  fetchDrinks,
  fetchPizzas,
  fetchSalads,
} from "@/api/requsetPizza";
import Basket from "@/components/ui/Basket/Basket";

import { useEffect, useState } from "react";
import Item from "./Item/pizza";

import styles from "./PizzaCards.module.sass";

const Cards = () => {
  const [show, setShow] = useState(false);

  const trash = () => {
    setShow((show) => !show);
  };
  const [dataPizza, setDataPizza] = useState([]);
  const [dataSalad, setDataSalad] = useState([]);
  const [dataDrink, setDataDrink] = useState([]);
  const [dataDesert, setDataDesert] = useState([]);
  const [dataCombo, setDataCombo] = useState([]);
  useEffect(() => {
    fetchPizzas().then((data) => {
      setDataPizza(data.data);
    });
    fetchSalads().then((data) => {
      setDataSalad(data.data);
    });
    fetchDrinks().then((data) => {
      setDataDrink(data.data);
    });
    fetchDeserts().then((data) => {
      setDataDesert(data.data);
    });
    fetchCombos().then((data) => {
      setDataCombo(data.data);
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
      <div className={styles.container}>
        <h1 className={styles.title}>Салаты</h1>
        <div className={styles.cards}>
          {dataSalad.map((data) => {
            return <Item data={data} key={data.id} trash={trash} />;
          })}
        </div>
      </div>
      <div className={styles.container}>
        <h1 className={styles.title}>Напитки</h1>
        <div className={styles.cards}>
          {dataDrink.map((data) => {
            return <Item data={data} key={data.id} trash={trash} />;
          })}
        </div>
      </div>
      <div className={styles.container}>
        <h1 className={styles.title}>Десерты</h1>
        <div className={styles.cards}>
          {dataDesert.map((data) => {
            return <Item data={data} key={data.id} trash={trash} />;
          })}
        </div>
      </div>
      <div className={styles.container}>
        <h1 className={styles.title}>Комбо</h1>
        <div className={styles.cards}>
          {dataCombo.map((data) => {
            return <Item data={data} key={data.id} trash={trash} />;
          })}
        </div>
      </div>
      {show && <Basket />}
    </div>
  );
};

export default Cards;
