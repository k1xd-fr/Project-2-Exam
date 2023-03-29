import ky from "ky";

const requestApi = ky.create({
  prefixUrl: process.env.NEXT_AUTH_API,
});

export const registerUser = (data) => {
  return requestApi
    .post("http://localhost:1337/api/auth/local/register", { json: data })
    .json();
};

export const fetchUsers = () => {
  return requestApi("http://localhost:1337/api/auth/local/register").json();
};
