import { post } from "./Common";

export const signup = async (email, fullName, password, householdKey) => {
  const payload = JSON.stringify({
    username: email,
    name: fullName,
    password: password,
    family: householdKey,
  });
  return post("family-members/signup", payload);
};
