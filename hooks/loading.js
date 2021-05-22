import Loading from "../components/Loading";
import { createContext, useContext, useState } from "react";

export const LoadingContext = createContext([false]);

export const LoadingProvider = (props) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={[loading, setLoading]}>
      {loading && <Loading />}
      {props.children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  return useContext(LoadingContext);
};
