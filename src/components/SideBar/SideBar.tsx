import { Sort } from "../Sort/Sort";
import classes from "./SideBar.module.scss";


export const SideBar = () => {
  return (
    <aside className={classes["sidebar-wrapper"]}>
      <Sort />
    </aside>
  );
};
