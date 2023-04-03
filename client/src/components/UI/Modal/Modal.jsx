import styles from "./Modal.module.sass";




const Modal = ({ children , close}) => {
  return (
    <div onClick={close} className={styles.block}>
      <div className={styles.modal}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
