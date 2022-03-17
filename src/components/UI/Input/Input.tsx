import { FC, useContext, useEffect } from "react";
import { EditContext } from "../../../context/edit";
import { useInput } from "../../../hooks/useInput";
import { InputType } from "../../../types/input";

import classes from "./Input.module.scss";

export interface InputData {
  value: string;
  isValid: boolean;
}

interface InputProps {
  initialValue: string;
  type: string;
  validateFunction: (str: string) => boolean;
  getInputData: (data: InputData, type: string) => void;
}

function getInputType(type: string): string {
  let inputType: string = "";

  switch (type) {
    case InputType.CITY:
      inputType = "text";
      break;
    case InputType.EMAIL:
      inputType = "email";
      break;
    case InputType.NAME:
      inputType = "text";
      break;
    case InputType.USERNAME:
      inputType = "text";
      break;
    case InputType.STREET:
      inputType = "text";
      break;
    case InputType.ZIPCODE:
      inputType = "text";
      break;
    case InputType.PHONE:
      inputType = "tel";
      break;
    case InputType.WEBSITE:
      inputType = "text";
      break;
  }

  return inputType;
}

export const Input: FC<InputProps> = ({
  initialValue,
  type,
  validateFunction,
  getInputData,
}) => {
  const editContext = useContext(EditContext);

  const {
    value,
    hasError,
    valueBlurHandler,
    valueChangeHandler,
    valueIsValid,
  } = useInput(initialValue, validateFunction);

  useEffect(() => {
    getInputData({ isValid: valueIsValid, value }, type);
  }, [valueIsValid, value]);

  const inputClass: string =
    hasError || !valueIsValid ? `${classes["invalid"]}` : "";
  const labelName: string = `${type.charAt(0)}${type.toLowerCase().slice(1)}`;

  const inputType = getInputType(type);

  return (
    <div className={classes["input-wrapper"]}>
      <label htmlFor={type.toLowerCase()}>{labelName}</label>
      <input
        id={type.toLowerCase()}
        value={value}
        disabled={!editContext?.isEditing}
        className={inputClass}
        type={inputType}
        onBlur={valueBlurHandler}
        onChange={valueChangeHandler}
      />
    </div>
  );
};
