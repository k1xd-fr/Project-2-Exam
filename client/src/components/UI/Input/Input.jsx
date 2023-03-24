import React from "react";

const Input = ({ style, type , name , placeholder , title , change , canceled}) => {
  return (
    <div className={style}>
        <p>{title}</p>
      <input type={type} name={name} placeholder={placeholder} />
    </div>
  );
};

export default Input;
