import Image from "next/image";
import styles from "./style.module.sass";
import cn from "clsx"

export const Card = ({ img, title, description }) => {
  return (
    <div className={cn(styles.cards , styles.center)}>
      <Image alt={title} width={350} height={138} src={img} />
      <p className={styles.text}>{description}</p>
    </div>
  );
};
