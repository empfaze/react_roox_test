import { SortButton, SortButtonType } from "../UI/SortButton/SortButton";
import classes from "./Sort.module.scss";

export const Sort = () => {
  return (
    <div className={classes["sort"]}>
      <span className={classes["sort__title"]}>Сортировка:</span>
      <SortButton type={SortButtonType.SORT_CITY}>по городу</SortButton>
      <SortButton type={SortButtonType.SORT_COMPANY}>по компании</SortButton>
    </div>
  );
};
