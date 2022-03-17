import { EditButton } from "../UI/EditButton/EditButton";

import classes from "./ProfileHeader.module.scss";

export const ProfileHeader = () => {
  return (
    <div className={classes["header-wrapper"]}>
      <h2 className={classes["heading-secondary"]}>Профиль пользователя</h2>
      <EditButton />
    </div>
  );
};
