import React, { ChangeEventHandler } from "react";

interface Props {
  type: "text" | "password" | "email" | "number" | "checkbox" | "radio";
  placeholder?: string;
  id: string;
  name: string;
  onChange?: Function;
  labelShow?: boolean;
}
const Input = ({ type, placeholder, id, name, onChange, labelShow }: Props) => {
  const radioAndcheckbox = ["radio", "checkbox"];
  let res;
  const InputRadioOrCheckbox = () => {
    return (
      <div className={`input-block`}>
        <input
          placeholder={placeholder}
          type={type}
          id={id}
          name={name}
          onChange={onChange as ChangeEventHandler<HTMLInputElement>}
        ></input>
        <label htmlFor={id} className={labelShow ? "" : "blind"}>
          {name ? name : id}
        </label>
      </div>
    );
  };
  const inputDefault = () => {
    return (
      <div className={`input-block`}>
        <input
          placeholder={placeholder}
          type={type}
          id={id}
          name={name}
          onChange={onChange as ChangeEventHandler<HTMLInputElement>}
        ></input>
        <label htmlFor={id} className={labelShow ? "" : "blind"}>
          {name ? name : id}
        </label>
      </div>
    );
  };
  if (onChange && radioAndcheckbox.includes(type)) {
    res = InputRadioOrCheckbox;
  } else {
    res = inputDefault;
  }
  return res();
};

export default Input;
