import got from "got";

const requestApi = got.extend({
  prefixUrl: process.env.NEXT_REST_API,
});

export const fetchUser = () => {
  return requestApi.get("user-pizzas").json();
};
