
const Button = ({ style, children , click }) => {
  return <button onClick={click} className={style}>{children}</button>;
};
export default Button;
