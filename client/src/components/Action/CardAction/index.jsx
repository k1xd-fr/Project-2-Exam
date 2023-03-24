import Image from "next/image";
import styles from "./style.module.sass";

export const CardAction = ({img, title, children}) => {
  return (
    <div className={styles.card}>
      <Image alt={title} width={350} height={138} src={img} />
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
};
