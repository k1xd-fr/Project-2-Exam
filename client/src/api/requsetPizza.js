import ky from "ky";

const requestPizza = ky.create({
  prefixUrl: "http://127.0.0.1:1337/api",
});

export const fetchPizzas = () => {
  return requestPizza.get("add-pizzas?populate=*").json();
};
