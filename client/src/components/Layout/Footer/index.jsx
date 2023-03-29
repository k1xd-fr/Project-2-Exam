import Image from "next/image";
import styles from "./Footer.module.sass";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.descriptions}>
            <Image
              src="/img/logo.svg"
              width={200}
              height={64}
              alt="logo"
              className={styles.logo}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
