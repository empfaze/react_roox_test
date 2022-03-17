import { FC, useState } from "react";
import { useParams } from "react-router-dom";
import { Form } from "../../components/Form/Form";
import { ProfileHeader } from "../../components/ProfileHeader/ProfileHeader";
import { Spinner } from "../../components/UI/Spinner/Spinner";
import { EditContext, IEditContext } from "../../context/edit";
import { IUser } from "../../types/user";

import classes from "./UserProfile.module.scss";

interface UserProfileProps {
  users: IUser[];
  isLoading: boolean;
  error: null | string;
}

export const UserProfile: FC<UserProfileProps> = ({
  users,
  isLoading,
  error,
}) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const params = useParams();

  const user = users.find((user) => user.id === Number(params.id));

  function editHandler() {
    isEditing ? setIsEditing(false) : setIsEditing(true);
  }

  const editContext: IEditContext = {
    isEditing,
    editHandler,
  };

  return (
    <section className={classes["profile-wrapper"]}>
      <EditContext.Provider value={editContext}>
        <div className={classes["form-wrapper"]}>
          <ProfileHeader />
          {isLoading && <Spinner />}
          {error && (
            <p className={classes["error-para"]}>
              Ошибка при загрузке данных с сервера...Пожалуйста, повторите
              попытку позже.
            </p>
          )}
          {!isLoading && user && <Form user={user} />}
        </div>
      </EditContext.Provider>
    </section>
  );
};
