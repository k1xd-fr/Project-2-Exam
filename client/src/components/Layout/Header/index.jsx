import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "./Header.module.sass";
import Modal from "@/components/ui/Modal/Modal";
import { Register } from "@/components/UI/Modal/Register/Register";
import Basket from "@/components/UI/Basket/Basket";

const Header = ({ click }) => {
  const { asPath } = useRouter();
  const [visible, isVisible] = useState(false);
  const [hamburger, setHamburger] = useState(false);
  const [modal, setModal] = useState(false);
  const [show, setShow] = useState(false);

  const showModal = () => {
    setModal((modal) => !modal);
  };

  const clickBtn = () => {
    setHamburger((hamburger) => !hamburger);
  };

  const close = () => {
    setModal(false);
  };

  // const trash = () => {
  //   setShow((show) => !show);
  // };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          <div className={styles.headerTop}>
            <Link href="/">
              <Image
                width={200}
                height={64}
                src="/img/logo.svg"
                alt="logo"
                className={styles.logo}
                priority
              />
            </Link>
            <div className={styles.shippingContent}>
              <h2 className={styles.shippingTitle}>
                Доставка пасты
                <strong className={styles.strongText}>Москва</strong>
              </h2>
              <span>Время доставки от 30 мин</span>
            </div>
            <a href="tel:8 800 333-36-62" className={styles.orderBtn}>
              Заказать звонок
            </a>
          </div>
          <nav className={styles.navBar}>
            <div className={styles.scroll}>
              <a href="#pizza" className={styles.navLink}>
                Пицца
              </a>

              <a href="#salats" className={styles.navLink}>
                Салаты
              </a>

              <a href="#drinks" className={styles.navLink}>
                Напитки
              </a>
              <a href="#deserts" className={styles.navLink}>
                Десерты
              </a>
              <Link href="/action" className={styles.navLink}>
                Акции
              </Link>
              <a href="#combo" className={styles.navLink}>
                Комбо
              </a>
              <a href="/contacts" className={styles.navLink}>
                Контакты
              </a>
            </div>
            <div className={styles.auth}>
              <button className={styles.signIn} onClick={showModal}>
                Войти
              </button>
              <Link href="/" className={styles.basket}>
                Корзина
              </Link>
            </div>
            {/* {show && <Basket click={close} />} */}
          </nav>
        </div>
      </div>
      {modal && (
        <Modal click={close}>
          <Register click={close} />
        </Modal>
      )}
    </header>
  );
};

export default Header;
