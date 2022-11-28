import { post } from "./Common";

export const createFamily = async (familyName) => {
  const payload = JSON.stringify({
    familyName,
  });
  return post("families/new", payload);
};
