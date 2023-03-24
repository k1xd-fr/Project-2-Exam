import Header from "../Layout/Header";
import { CardAction } from "./CardAction";
import { card } from "./CardAction/CardBase";
import styles from "./style.module.sass";

const Action = () => {
  return (
    <>
      <Header/>
      <div className={styles.container}>
        <h2>Акции</h2>
        <div>
          {card.map((item) => {
            return (
              <CardAction
                {...item}
                key={item.id}
              >{item.description}</CardAction>
            )
          })}
        </div>
      </div>
    </>
  );
};

export default Action;
