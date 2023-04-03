import { useState } from "react";
import styles from "../Modal.module.sass";

import { useParamContext } from "@/context/context";

export const Register = ({ click }) => {
  const [authData, setAuthData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { login } = useParamContext();

  const changeHandler = (e) => {
    setAuthData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const sentData = (e) => {
    e.preventDefault();

    login(authData);

    // try {
    //   const data = await registerUser(authData);

    //   Cookies.set("token", data.jwt, {
    //     expires: 30,
    //   });

    //   if (data) {
    //     router.push("/profile");
    //   }
    // } catch (error) {
    //   console.log(error.message);
    // }
  };

  return (
    <>
      <h2 className={styles.formTitle}>Вход на сайт</h2>
      <form className={styles.form} onSubmit={sentData}>
        <div className={styles.numberLabel}>
          <span className={styles.textNum}>Имя</span>
          <input
            type="text"
            name="username"
            className={styles.input}
            placeholder="Enter name"
            onChange={changeHandler}
          />
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
          <div className={styles.btns}>
            <button className={styles.btn}>Log In</button>
            <button className={styles.btn}>Sign In</button>
          </div>
        </div>
        <p className={styles.close} onClick={click}>
          &#215;
        </p>
      </form>
    </>
  );
};
