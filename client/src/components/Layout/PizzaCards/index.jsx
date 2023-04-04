import {
  fetchCombos,
  fetchDeserts,
  fetchDrinks,
  fetchPizzas,
  fetchSalads,
} from "@/api/requsetPizza";

import { useEffect, useState } from "react";
import Item from "./Item/pizza";

import styles from "./PizzaCards.module.sass";
import { useRouter } from "next/router";
import PizzaModal from "@/components/PizzaModal";

const Cards = () => {
  const [dataPizza, setDataPizza] = useState([]);
  const [dataSalad, setDataSalad] = useState([]);
  const [dataDrink, setDataDrink] = useState([]);
  const [dataDesert, setDataDesert] = useState([]);
  const [dataCombo, setDataCombo] = useState([]);

  const router = useRouter();

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

  // const click = () => {
  //   router.push('/')
  // }

  return (
    <div className={styles.menu}>
      <div className={styles.container}>
        <h2 id="pizza" className={styles.title}>
          Пицца
        </h2>
        <div className={styles.cards}>
          {dataPizza.map((data) => {
            return (
              <Item
                click={() => router.push(`/${data.id}`)}
                data={data}
                key={data.id}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.container}>
        <h2 id="salats" className={styles.title}>
          Салаты
        </h2>
        <div className={styles.cards}>
          {dataSalad.map((data) => {
            return <Item data={data} key={data.id} />;
          })}
        </div>
      </div>
      <div className={styles.container}>
        <h2 id="drinks" className={styles.title}>
          Напитки
        </h2>
        <div className={styles.cards}>
          {dataDrink.map((data) => {
            return <Item data={data} key={data.id} />;
          })}
        </div>
      </div>
      <div className={styles.container}>
        <h2 className={styles.title} id="deserts">
          Десерты
        </h2>
        <div className={styles.cards}>
          {dataDesert.map((data) => {
            return <Item data={data} key={data.id} />;
          })}
        </div>
      </div>
      <div className={styles.container}>
        <h1 className={styles.title} id="combo">
          Комбо
        </h1>
        <div className={styles.cards}>
          {dataCombo.map((data) => {
            return <Item data={data} key={data.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Cards;
