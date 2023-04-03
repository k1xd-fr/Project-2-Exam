import React, { useState } from "react";

const AuthUser = ({ click }) => {
  const [signUser, setSignuser] = useState({
    identifire: "",
    password: "",
  });

  const changeHandler = (e) => {
    setSignuser((data) => {
      return {
        ...data,
        [e.target.name]: e.target.value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h2 className={styles.formTitle}>Вход на сайт</h2>
      <form className={styles.form} onSubmit={formSubmit}>
        <div className={styles.numberLabel}>
          <span className={styles.textNum}>Email</span>
          <input
            type="email"
            name="email"
            className={styles.input}
            placeholder="Enter email"
            onChange={changeHandler}
          />
        </div>
        {/* <div className={styles.numberLabel}></div> */}
        <div className={styles.numberLabel}>
          <span className={styles.textNum}>Password</span>
          <input
            type="password"
            name="password"
            className={styles.input}
            placeholder="Enter password"
            onChange={changeHandler}
          />
          <button className={styles.btn}>Войти</button>
        </div>
        <p className={styles.close} onClick={click}>
          &#215;
        </p>
      </form>
    </>
  );
};

export default AuthUser;
