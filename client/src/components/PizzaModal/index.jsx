import Image from "next/image";
import styles from "./PizzaModal.module.sass";
import { useEffect, useState } from "react";
import { fetchPizzaById } from "@/api/requsetPizza";
import { useRouter } from "next/router";

const PizzaModal = () => {
  const [getId, setGetId] = useState();

  const { query } = useRouter();
  useEffect(() => {
    fetchPizzaById(query.id).then((res) => setGetId(res.data));
  }, []);

  console.log(getId && getId);
  return (
    <div className={styles.bgPizza}>
      <div className={styles.modalPizza}>
        <div className={styles.modalContent}>
          <div className={styles.modalImage}>
            <Image
              src="/images/pizza/PeperonyFresh.webp"
              width={304}
              height={304}
              className={styles.pizzaModalImg}
            />
          </div>
          <div className={styles.pizzaDesc}>
            <h2 className={styles.title}>{getId && getId.tItle}</h2>
            <p className={styles.pizzaText}>Традиционное тесто 360г</p>
          </div>
        </div>
      </div>
      <p className={styles.close}>&#215;</p>
    </div>
  );
};

export default PizzaModal;
