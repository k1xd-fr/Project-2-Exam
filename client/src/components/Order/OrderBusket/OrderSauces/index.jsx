import styles from "./style.module.sass";
import { useEffect, useState } from "react";
import { OrderSausecCard } from "./OrderSausecCard";
import { fetchIngs } from "@/api/requsetPizza";

export const OrderSausec = () => {
  const [dataIngs, setDataIngs] = useState([]);
  useEffect(() => {
    fetchIngs().then((data) => {
      setDataIngs(data.data);
    });
  }, []);
  return (
    <div className={styles.div}>
      <h3>Соусы к бортикам и закускам</h3>
      <div className={styles.sausec}>
        {dataIngs.map((data) => {
          return (
            <OrderSausecCard
              key={data.id}
              img={data.img.url}
              title={data.title}
              price={data.price}
            />
          );
        })}
      </div>
    </div>
  );
};
