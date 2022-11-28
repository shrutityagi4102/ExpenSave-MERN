import { put } from "./Common";

export const addOneToCategory = async (itemId, categoryId) => {
  const payload = JSON.stringify({
    itemId,
  });
  return put("categories/addItem/" + categoryId, payload);
};
