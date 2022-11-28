import { put } from "./Common";

export const joinFamily = async (familyId) => {
  const payload = JSON.stringify({
    familyId,
  });
  put("family-members", payload);
  return put("families", payload);
};
