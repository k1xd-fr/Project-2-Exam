import { useState } from "react";
import styles from "../Modal.module.sass"
export const Register = ({click}) => {

  const sentData = (e) => {
    e.preventDefault();
    
  };
  return (
    <>
        <h2 className={styles.formTitle}>Вход на сайт</h2>
        <form className={styles.form} onSubmit={sentData}>
          <label className={styles.numberLabel}>
            <span className={styles.textNum}>Номер телефона</span>
            <input
              type="numb"
              name="phone"
              className={styles.input}
              placeholder="Enter phone number"
            />
          </label>
          <button className={styles.btn}>Выслать код</button>
        </form>
        <p className={styles.close} onClick={click}>
          &#215;
        </p>
    </>
  )
}
