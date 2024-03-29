import Button from "@/components/UI/Button/Button";
import Image from "next/image";
import styles from "./style.module.sass";

export const CardAction = ({ img, title, children, open }) => {

  return (
    <div className={styles.cards}>
      <div className={styles.card}>
        <Image alt={title} width={350} height={138} src={img} />
        <div className={styles.description}>
          <h3 className={styles.cardTitle}>{title}</h3>
          <p className={styles.text}>{children}</p>
          <Button click={open} style={styles.btn}>
            Посмотреть
          </Button>
        </div>
      </div>
    </div>
  );
};
