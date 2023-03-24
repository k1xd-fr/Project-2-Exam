import Button from "@/components/UI/Button/Button";
import Input from "@/components/UI/Input/Input";
import cn from "clsx";
import styles from "./style.module.sass";

const UserDataBase = ({ user }) => {
  return (
    <div className={styles.container}>
      <h1>Личные данные</h1>
      <form className={styles.form}>
        <div className={styles.userData}>
          <Input
            style={styles.userDataInput}
            type="text"
            name="name"
            placeholder={user}
            title="имя"
          />
          <Input
            style={styles.userDataInput}
            type="email"
            name="email"
            placeholder={user}
            title="e-mail"
          />
          <Input
            style={styles.userDataInput}
            type="date"
            name="date"
            placeholder={user}
            title="Дата рождения"
          />
          <Input
            style={styles.userDataInput}
            type="num"
            name="num"
            placeholder={user}
            title="Номер телефона"
          />
          <Input
            style={styles.userDataInput}
            type="password"
            name="password"
            placeholder={user}
            title="Пароль"
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
  );
};

export default UserDataBase;
