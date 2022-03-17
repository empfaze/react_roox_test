import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ISortContext, SortContext } from "../../context/sort";
import useFetch from "../../hooks/useFetch";
import { routes } from "../../routes/routes";
import { IUser } from "../../types/user";
import { SortButtonType } from "../UI/SortButton/SortButton";
import classes from "./App.module.scss";

export const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const { main, profile } = routes;

  function handleRecievedData(data: IUser[]) {
    setUsers(data);
  }
  const url = "https://jsonplaceholder.typicode.com/users";
  const { error, isLoading, sendRequest } = useFetch();

  useEffect(() => {
    if (users.length) return;
    sendRequest(url, handleRecievedData);
  }, []);  

  function sortUsers(type: SortButtonType): void {
    switch (type) {
      case SortButtonType.SORT_CITY:
        setUsers(
          [...users].sort((a, b) => (a.address.city > b.address.city ? 1 : -1))
        );
        break;
      case SortButtonType.SORT_COMPANY:
        setUsers(
          [...users].sort((a, b) => (a.company.name > b.company.name ? 1 : -1))
        );
        break;
    }
  }

  const sortContext: ISortContext = {
    sortUsers,
  };

  return (
    <div className={classes["main-wrapper"]}>
      <SortContext.Provider value={sortContext}>
        <Routes>
          <Route
            path={main.path}
            key={main.name}
            element={
              <main.component
                error={error}
                isLoading={isLoading}
                users={users}
              />
            }
          />
          <Route
            path={profile.path}
            key={profile.name}
            element={<profile.component users={users} isLoading={isLoading} error={error}/>}
          />
        </Routes>
      </SortContext.Provider>
    </div>
  );
};
