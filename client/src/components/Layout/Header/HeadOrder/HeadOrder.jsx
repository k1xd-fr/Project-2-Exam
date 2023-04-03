import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.sass";

const HeadOrder = () => {
  return (
    <>
      <header>
        <Link href="/">
          <Image
            width={200}
            height={64}
            src="/img/logo.svg"
            alt="logo"
            priority
          />
        </Link>
      </header>
    </>
  );
};

export default HeadOrder;
