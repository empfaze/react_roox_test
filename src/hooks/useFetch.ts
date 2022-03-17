import { useState, useCallback } from "react";
import { IUser } from "../types/user";

const useFetch = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);

  const sendRequest = useCallback(
    async (url: string, handleRecievedData: (fetchedData: IUser[]) => void) => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Request failed!");
        }

        const data = await response.json();
        handleRecievedData(data);
      } catch (err: any) {
        setError(
          err.message ||
            "Возникли технические проблемы со стороны сервера...Пожалуйста, перезагрузите страницу чуть позже."
        );
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return {
    isLoading,
    error,
    sendRequest,
  };
};
export default useFetch;
