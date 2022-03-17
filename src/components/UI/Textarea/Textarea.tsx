import { FC, useContext, useEffect } from "react";
import { EditContext } from "../../../context/edit";
import { useTextarea } from "../../../hooks/useTextarea";

import classes from "./Textarea.module.scss";

interface TextareaData {
  value: string;
  isValid: null;
}

interface TextareaProps {
  initialValue: string;
  type: string;
  getTextareaData: (data: TextareaData, type: string) => void;
}

export const Textarea: FC<TextareaProps> = ({
  initialValue,
  type,
  getTextareaData,
}) => {
  const editContext = useContext(EditContext);

  const { value, valueBlurHandler, valueChangeHandler } =
    useTextarea(initialValue);

  useEffect(() => {
    getTextareaData({ value, isValid: null }, type);
  }, [value]);

  const labelName: string = `${type.charAt(0)}${type.toLowerCase().slice(1)}`;

  return (
    <div className={classes["textarea-wrapper"]}>
      <label htmlFor={type}>{labelName}</label>
      <textarea
        id={type.toLowerCase()}
        value={value}
        disabled={!editContext?.isEditing}
        onBlur={valueBlurHandler}
        onChange={valueChangeHandler}
      />
    </div>
  );
};
