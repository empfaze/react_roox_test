import { FC } from "react";
import { Link } from "react-router-dom";

import classes from "./UserItem.module.scss";

interface UserItemProps {
  id: number;
  name: string;
  city: string;
  company: string;
}

export const UserItem: FC<UserItemProps> = ({ id, name, city, company }) => {
  return (
    <li className={classes["item"]}>
      <div className={classes["info"]}>
        <p className={classes["info__para"]}>
          <span className={classes["info__para--grey"]}>ФИО:</span>{name}
        </p>
        <p className={classes["info__para"]}>
          <span className={classes["info__para--grey"]}>Город:</span>{city}
        </p>
        <p className={classes["info__para"]}>
          <span className={classes["info__para--grey"]}>Компания:</span>{company}
        </p>
      </div>
      <Link to={`/${id}`} className={classes["item__link"]}>
        Подробнее
      </Link>
    </li>
  );
};
