import { FC, useContext } from "react";
import { SortContext } from "../../../context/sort";

import classes from "./SortButton.module.scss";

export enum SortButtonType {
  SORT_CITY = "SORT_CITY",
  SORT_COMPANY = "SORT_COMPANY",
}

interface SortButtonProps {
  children: string;
  type: SortButtonType;
}

export const SortButton: FC<SortButtonProps> = ({ children, type }) => {
  const sortContext = useContext(SortContext);

  return (
    <button
      className={classes["button--purple"]}
      onClick={sortContext?.sortUsers.bind(null, type)}
    >
      {children}
    </button>
  );
};
