import ky from "ky";

const requestApi = ky.create({ prefixUrl: process.env.NEXT_PUBCLI_AUTH_API });
// функция которая отправляет данные по авторизации
export const registerUser = (data) => {
  return requestApi.post("auth/local/register", { json: data }).json();
};
export const fetchUsers = (token) => {
  return requestApi
    .get("users/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .json();
};

// export const authUser =
