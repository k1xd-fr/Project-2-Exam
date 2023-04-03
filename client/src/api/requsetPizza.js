import ky from "ky";

const requestPizza = ky.create({
  prefixUrl: "http://localhost:1337/api",
});

export const fetchPizzas = () => {
  return requestPizza.get("add-pizzas?populate=*").json();
};
export const fetchSalads = () => {
  return requestPizza.get("add-salads?populate=*").json();
};
export const fetchDrinks = () => {
  return requestPizza.get("add-drinks?populate=*").json();
};
export const fetchDeserts = () => {
  return requestPizza.get("add-deserts?populate=*").json();
};
export const fetchCombos = () => {
  return requestPizza.get("add-combos?populate=*").json();
};
export const fetchIngs = () => {
  return requestPizza.get("add-ings?populate*").json();
};

