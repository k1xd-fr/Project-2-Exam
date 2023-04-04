import Image from "next/image"
import styles from "./style.module.sass"

export const OrderSausecCard = ({title , img , price  }) => {
  
  return (
    <div className={styles.sausec}>
      <Image src={img} width={50} height={50} alt={title}/>
      <span>{title}</span>
      <span className={styles.red}>от {price}с</span>
    </div>
  )
}
