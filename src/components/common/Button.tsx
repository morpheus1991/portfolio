import React, { MouseEventHandler } from "react";
import { Link } from "react-router-dom";
interface Props {
  type: "button" | "link" | "submit";
  onClick: Function;
  children: React.ReactNode;
}
const Button = ({ type, onClick, children }: Props) => {
  return (
    <div className="button-block">
      {type === "button" || "submit" ? (
        <button onClick={onClick as MouseEventHandler<HTMLButtonElement>}>
          {children}
        </button>
      ) : null}
      {type === "link" ? (
        <Link to="" onClick={onClick as MouseEventHandler<HTMLAnchorElement>}>
          {children}
        </Link>
      ) : null}
    </div>
  );
};

export default Button;
