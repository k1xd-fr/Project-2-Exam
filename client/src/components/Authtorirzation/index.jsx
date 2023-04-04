import Link from "next/link";
import styles from "./Autorirzation.module.sass";
import { useState } from "react";

const Autorization = () => {
  const [authUser, setAuthUser] = useState({
    identifier: "",
    password: "",
  });

  const sendData = (e) => {
    e.preventDefault();
  };

  const handlerForm = (e) => {
    setAuthUser((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerContainer}>
            <Link href="/" className={styles.back}>
              Вернуться на главную страницу
            </Link>
          </div>
        </div>
        <div className={styles.bg}>
          <div className={styles.wrapper}>
            <form className={styles.form} onSubmit={sendData}>
              <div className={styles.inputGroup}>
                <input
                  type="email"
                  placeholder="email"
                  className={styles.input}
                  onChange={handlerForm}
                />
              </div>
              <div className={styles.inputGroup}>
                <input
                  type="password"
                  placeholder="password"
                  className={styles.input}
                  onChange={handlerForm}
                />
              </div>
              <div className={styles.inputGroup}>
                <button className={styles.btn}>Войти</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Autorization;
