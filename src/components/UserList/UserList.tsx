import { FC } from "react";
import { IUser } from "../../types/user";
import { UserItem } from "../UserItem/UserItem";

import classes from "./UserList.module.scss";

interface UserListProps {
  users: IUser[];
}

export const UserList: FC<UserListProps> = ({ users }) => {
  return (
    <>
      {!users.length && (
        <p className={classes["empty-para"]}>Пользователей не найдено...</p>
      )}
      {users.length && (
        <section className={classes["userlist-wrapper"]}>
          <ul className={classes["userlist"]}>
            {users.map((user) => (
              <UserItem
                name={user.name}
                city={user.address.city}
                key={user.id}
                company={user.company.name}
                id={user.id}
              />
            ))}
          </ul>
          <span className={classes["userlist__count"]}>
            Найдено {users.length} пользователей
          </span>
        </section>
      )}
    </>
  );
};
