import { createContext, useContext, useState } from "react";

const Context = createContext({});

export const Providers = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authData, setAuthData] = useState({
    username: "",
    email: "",
    password: "",
  });

  return (
    <Context.Provider value={{ authData, setAuthData }}>
      {children}
    </Context.Provider>
  );
};
export const useParamContext = () => {
  return useContext(Context);
};
