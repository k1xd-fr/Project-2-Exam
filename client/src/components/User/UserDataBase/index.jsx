import Button from "@/components/UI/Button/Button";
import Input from "@/components/UI/Input/Input";
import { useParamContext } from "@/context/context";
import cn from "clsx";
import { useState } from "react";
import styles from "./style.module.sass";

const UserDataBase = ({ user }) => {
  const { authData } = useParamContext();

  const [param, setParam] = useState({
    name: "",
    email: "",
    date: "",
    num: "",
    password: "",
  });

  const change = (e) => {
    setParam((param) => {
      return {
        ...param,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.profiler}>
        <h1>Личные данные</h1>

        {/* {authData.username} */}

        <form className={styles.form}>
          <div className={styles.userData}>
            <Input
              style={styles.userDataInput}
              type="text"
              name="name"
              placeholder={user}
              title="имя"
              onchahge={change}
              value={param.name}
            />
            <Input
              style={styles.userDataInput}
              type="email"
              name="email"
              placeholder={user}
              title="e-mail"
              onchahge={change}
              value={param.email}
            />
            <Input
              style={styles.userDataInput}
              type="date"
              name="date"
              placeholder={user}
              title="Дата рождения"
              onchahge={change}
              value={param.date}
            />
            <Input
              style={styles.userDataInput}
              type="num"
              name="num"
              placeholder={user}
              title="Номер телефона"
              onchahge={change}
              value={param.num}
            />
            <Input
              style={styles.userDataInput}
              type="password"
              name="password"
              placeholder={user}
              title="Пароль"
              onchahge={change}
              value={param.password}
            />
          </div>
          <h2>Подписки</h2>
          <div className={styles.Sms}>
            <input type="radio" name="sms" id="sms" />
            <p>Сообщать о бонусах, акциях и новых продуктах</p>
            <span>i</span>
          </div>
          <Button style={styles.btn}>Выйти</Button>
        </form>
      </div>
    </div>
  );
};

export default UserDataBase;
