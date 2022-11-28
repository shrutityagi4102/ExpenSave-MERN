import { get } from "./Common";

export const getCategoryArray = async (arrayId) => {
  return get("categories/" + arrayId);
};
