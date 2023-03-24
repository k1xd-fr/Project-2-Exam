import styles from "./Modal.module.sass";




const Modal = ({ children}) => {
  return (
    <div className={styles.block}>
      <div className={styles.modal}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
