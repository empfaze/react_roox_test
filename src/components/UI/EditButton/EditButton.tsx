import { useContext } from "react";
import { EditContext } from "../../../context/edit";

import classes from "./EditButton.module.scss";

export const EditButton = () => {
  const editContext = useContext(EditContext);

  const buttonClasses = editContext?.isEditing
    ? `${classes["button"]} ${classes["button--red"]}`
    : `${classes["button"]} ${classes["button--purple"]}`;

  return (
    <button className={buttonClasses} onClick={editContext?.editHandler}>
      {editContext?.isEditing ? "Отменить" : "Редактировать"}
    </button>
  );
};
