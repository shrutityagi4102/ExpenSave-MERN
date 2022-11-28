import { put } from "./Common";

export const changeMemberAllowance = async (userId, allowance) => {
  const payload = JSON.stringify({
    allowance,
  });
  return put("family-members/" + userId, payload);
};
