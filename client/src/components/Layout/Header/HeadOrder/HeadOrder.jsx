import Image from "next/image";
import Link from "next/link";
import StepsOrder from "./StepsOrder";
import styles from "./style.module.sass";

const HeadOrder = () => {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <Image
            width={200}
            height={64}
            src="/img/logo.svg"
            alt="logo"
            priority
          />
        </Link>
        <div>
          <StepsOrder
            first={styles.active}
            second={null}
            third={null}
            changeNum="3"
          />
        </div>
      </header>
    </>
  );
};

export default HeadOrder;
