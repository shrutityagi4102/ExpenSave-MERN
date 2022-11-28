import { put } from "./Common";

export const addNewToCategory = async (category, itemId, userId) => {
  const payload = JSON.stringify({
    category,
    itemId,
  });
  return put("family-members/addArray/" + userId, payload);
};
