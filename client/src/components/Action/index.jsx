import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import { CardAction } from "./CardAction";
import { card } from "./CardAction/CardBase";
import styles from "./style.module.sass";

const Action = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <h2 className={styles.title}>Акции</h2>
        <div className={styles.cards}>
          {card.map((item) => {
            return (
              <CardAction {...item} key={item.id}>
                {item.description}
              </CardAction>
            );
          })}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Action;
