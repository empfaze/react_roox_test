import { FC } from "react";
import { SideBar } from "../../components/SideBar/SideBar";
import { Spinner } from "../../components/UI/Spinner/Spinner";
import { UserList } from "../../components/UserList/UserList";
import { IUser } from "../../types/user";

import classes from "./Main.module.scss";

interface MainProps {
  isLoading: boolean;
  error: null | string;
  users: IUser[];
}

export const Main: FC<MainProps> = ({ error, isLoading, users }) => {
  return (
    <div className={classes["content-wrapper"]}>
      <SideBar />
      <main className={classes["main"]}>
        <h1 className={classes["heading-primary"]}>Список пользователей:</h1>
        {!error && isLoading && <Spinner />}
        {error && !isLoading && error}
        {users.length && <UserList users={users} />}
      </main>
    </div>
  );
};
