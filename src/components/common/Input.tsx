import React, { ChangeEventHandler } from "react";
import { css } from "styled-components";
import { GRAY_SCALE } from "../../style/GlobalStyle";

interface Props {
  type: "text" | "password" | "email" | "number" | "checkbox" | "radio";
  placeholder?: string;
  id: string;
  name: string;
  onChange?: Function;
  labelShow?: boolean;
  value?: string;
  checked?: boolean;
}

/* 인풋 요소 반환
반환타입 1 : input text 류
반환타입 2 : checkbox, radio버튼 류
*/
export const InputStyle = {
  checkbox: css`
    .input-block {
      display: flex;
      align-items: center;
      &.radio {
        input {
          display: none;
          & + label {
            width: 22px;
            height: 22px;
            border-radius: 50%;
            border: 1px solid ${GRAY_SCALE.grade3};
          }
          &:checked {
            & + label {
              /* background: red; */
              width: 22px;
              height: 22px;
              background: url(/image/radio-checked.png) no-repeat;
              border: 0;
            }
          }
        }
      }
      &.checkbox {
        input {
          display: none;
          & + label {
            width: 20px;
            height: 20px;
            border: 1px solid ${GRAY_SCALE.grade4};
          }
          &:checked {
            & + label {
              width: 20px;
              height: 20px;
              border: 0;

              background: url(/image/checkbox-checked.png) no-repeat;
            }
          }
        }
      }
    }
  `,
};
const Input = React.forwardRef(
  (
    { type, placeholder, id, name, onChange, labelShow, value, checked }: Props,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const radioAndcheckbox = ["radio", "checkbox"];
    let res;
    const InputRadioOrCheckbox = () => {
      return (
        <div className={`input-block ${type}`}>
          <input
            placeholder={placeholder}
            type={type}
            id={id}
            name={name}
            onChange={() => {
              if (onChange) onChange(id);
            }}
            checked={checked}
          ></input>
          <label htmlFor={id} className={labelShow ? "" : "blind"}>
            {name ? name : id}
          </label>
        </div>
      );
    };
    const inputDefault = () => {
      if (value) {
        return (
          <div className={`input-block`}>
            <input
              placeholder={placeholder}
              type={type}
              id={id}
              name={name}
              onChange={onChange as ChangeEventHandler<HTMLInputElement>}
              ref={ref}
            ></input>
            <label htmlFor={id} className={labelShow ? "" : "blind"}>
              {name ? name : id}
            </label>
          </div>
        );
      }
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
  }
);

export default Input;
