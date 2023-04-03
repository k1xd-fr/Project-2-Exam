import { useRouter } from "next/router";
import { useState } from "react";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import Modal from "../UI/Modal/Modal";
import { CardAction } from "./CardAction";
import { Card } from "./CardAction/card";
import { card } from "./CardAction/CardBase";
import styles from "./style.module.sass";

const Action = () => {
  const router = useRouter();
  const [currentCard, setCurrentCard] = useState(null)

  const onCardActive = (item) => {
    setCurrentCard(item)
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <h2 className={styles.title}>Акции</h2>
        <div className={styles.cards}>
          {card.map((item, index) => {
            return (
              <CardAction open={()=> onCardActive(item)} {...item} key={item.id}>
                {item.description}
              </CardAction>
            );
          })}
        </div>
        {
          currentCard && <Modal close={() => setCurrentCard(null)}><Card {...currentCard}/></Modal>
        }
        <Footer />
      </div>
    </>
  );
};

export default Action;
