import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "./Header.module.sass";
import Modal from "@/components/ui/Modal/Modal";
import { Register } from "@/components/ui/Modal/Register/Register";

const Header = () => {
  const { asPath } = useRouter();
  const [visible, isVisible] = useState(false);
  const [hamburger, setHamburger] = useState(false);
  const [modal, setModal] = useState(false);

  const showModal = () => {
    setModal((modal) => !modal);
  };

  const clickBtn = () => {
    setHamburger((hamburger) => !hamburger);
  };

  const close = () => {
    setModal(false);
  };

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
              <Link href="/" className={styles.navLink}>
                Паста
              </Link>
              <Link href="/" className={styles.navLink}>
                Салаты
              </Link>
              <Link href="/" className={styles.navLink}>
                Напитки
              </Link>
              <Link href="/" className={styles.navLink}>
                Десерты
              </Link>
              <Link href="/action" className={styles.navLink}>
                Акции
              </Link>
              <Link href="/" className={styles.navLink}>
                Комбо
              </Link>
              <Link href="/contacts" className={styles.navLink}>
                Контакты
              </Link>
            </div>
            <div className={styles.auth}>
              <button className={styles.signIn} onClick={showModal}>
                Войти
              </button>
              <Link href="/" className={styles.basket}>
                Корзина
              </Link>
            </div>
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
