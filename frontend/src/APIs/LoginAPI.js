import { post } from "./Common";

export const login = async (email, password) => {
  const payload = JSON.stringify({
    username: email,
    password: password,
  });
  return post("family-members/signin", payload);
};
