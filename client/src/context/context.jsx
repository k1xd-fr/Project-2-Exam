import { useRouter } from "next/router";
import { createContext, use, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { fetchUsers, registerUser } from "@/api/clientApi";

const AuthContext = createContext({});

export const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function checkToken() {
      const token = Cookies.get("token");
      console.log(token);
      // if (token) {
      //   const userData = await fetchUsers(token);
      //   if (userData) setUser(userData);
      // }
      setLoading(false);
    }
    checkToken();
  }, [router.asPath]);

  const login = async (authData) => {
    try {
      const data = await registerUser(authData);
      Cookies.set("token", data.jwt, {
        expires: 30,
      });
      if (data) {
        router.push("/profile");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <AuthContext.Provider value={{ login, loading, user, isAuth: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useParamContext = () => {
  return useContext(AuthContext);
};
