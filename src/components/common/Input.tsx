import React from "react";
interface Props {
  type: "text" | "password" | "email" | "number" | "checkbox" | "radio";
  placeholder?: string;
  id: string;
  name: string;
}
const Input = ({ type, placeholder, id, name }: Props) => {
  const radioAndcheckbox = ["radio", "checkbox"];
  return (
    <div>
      {radioAndcheckbox.includes(type) ? (
        /* 라디오 버튼 및 체크박스 */
        <div className={`inputBlock ${type}`}>
          <input type={type} id={id} name={name}></input>
          <label htmlFor={id}>{name ? name : id}</label>
        </div>
      ) : (
        /* 텍스트, 이메일, 넘버, 패스워드 */
        <div className={`inputBlock`}>
          <input type={type} id={id} name={name}></input>
          <label htmlFor={id}>{name ? name : id}</label>
        </div>
      )}
    </div>
  );
};

export default Input;
