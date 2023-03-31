import Image from "next/image";
import styles from "./Footer.module.sass";

import {
  FaFacebook,
  FaFacebookMessenger,
  FaSkype,
  FaTelegram,
  FaVk,
  FaWhatsapp,
} from "react-icons/fa";
import Link from "next/link";

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
            <div className={styles.info}>
              <div className={styles.firstInfo}>
                <div className={styles.titles}>
                  <div className={styles.socialTitle}>
                    <h5 className={styles.title}>Калорийность и состав</h5>
                  </div>
                  <div className={styles.socialTitle}>
                    <h5 className={styles.title}>Правовая информация</h5>
                  </div>
                </div>
                <h5 className={styles.titleWebsites}>Мы в соцсетях</h5>
                <div className={styles.linksSocial}>
                  <div className={styles.links}>
                    <div className={styles.social}>
                      <a href="#">YouTube</a>
                    </div>
                    <div className={styles.social}>
                      <a href="#">Instagram</a>
                    </div>
                  </div>
                  <div className={styles.links}>
                    <div className={styles.social}>
                      <a href="#">Facebook</a>
                    </div>
                    <div className={styles.social}>
                      <a href="#">ВКонтакте</a>
                    </div>
                  </div>
                </div>
                <div className={styles.confidential}>
                  <span className={styles.span}>
                    YaBao Все права защищены © 2021
                  </span>
                  <div className={styles.cardPay}>
                    <Image
                      src="/images/footer/visa.png"
                      alt="payCard"
                      width={36}
                      height={36}
                    />
                    <Image
                      src="/images/footer/pay.png"
                      alt="payCard"
                      width={36}
                      height={36}
                    />
                    <Image
                      src="/images/footer/visa2.png"
                      alt="payCard"
                      width={36}
                      height={36}
                    />
                  </div>
                </div>
              </div>

              <div className={styles.secondInfo}>
                <h2 className={styles.secondTitle}>
                  Остались вопросы? А мы всегда на связи
                </h2>
                <div className={styles.iconsSocial}>
                  <div className={styles.whatsapp}>
                    <Link href="#">
                      <FaWhatsapp className={styles.icon} />
                    </Link>
                  </div>
                  <div className={styles.whatsapp}>
                    <Link href="https://www.skype.com/ru/">
                      <FaSkype className={styles.icon} />
                    </Link>
                  </div>
                  <div className={styles.whatsapp}>
                    <Link href="https://www.messenger.com/">
                      <FaFacebookMessenger className={styles.icon} />
                    </Link>
                  </div>
                  <div className={styles.whatsapp}>
                    <Link href="#">
                      <FaTelegram className={styles.icon} />
                    </Link>
                  </div>
                  <div className={styles.whatsapp}>
                    <Link href="https://ru-ru.facebook.com/">
                      <FaFacebook className={styles.icon} />
                    </Link>
                  </div>
                  <div className={styles.whatsapp}>
                    <Link href="https://vk.com/">
                      <FaVk className={styles.icon} />
                    </Link>
                  </div>
                  {/* <div className={styles.whatsapp}>
                    <Link href="https://vk.com/" className={styles.message}>
                      Написать нам
                    </Link>
                  </div> */}
                </div>

                <div className="orders">
                  <div>
                    <Link href="#" className={styles.number}>
                      Заказать звонок
                    </Link>
                  </div>
                  {/* <div className="foodImage"> */}
                  {/* <Image
                    src="/images/footer/sup.png"
                    width={300}
                    height={245}
                  /> */}
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image className={styles.lapsha} width={312} height={245} src="/img/lapsha.svg"/>
    </div>
  );
};

export default Footer;
