import Link from "next/link";
import { BonusCard } from "./BonusCard/BonusCard";
import styles from "./style.module.sass";

export const UserBonus = () => {
  return (
    <div className={styles.container}>
      <h1>Мои бонусы</h1>
      <div className={styles.cards}>
        <BonusCard />
      </div>
      <Link href="/action" className={styles.link}>
        Все наши акции
      </Link>
    </div>
  );
};
