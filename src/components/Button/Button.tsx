import React from "react";
import ButtonStyled from "./ButtonStyled";

interface ButtonPropsStructure {
  textContent: string;
  classname?: string;
  onClick: () => void;
}

const Button = ({
  onClick,
  textContent,
  classname,
}: ButtonPropsStructure): React.ReactElement => {
  return (
    <ButtonStyled onClick={onClick} className={`${classname}`}>
      {textContent}
    </ButtonStyled>
  );
};

export default Button;
