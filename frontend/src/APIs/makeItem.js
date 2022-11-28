import { post } from "./Common";

export const makeItem = async (title, description, cost, date) => {
  const payload = JSON.stringify({
    title,
    description,
    cost,
    date,
  });
  return post("items/", payload);
};
