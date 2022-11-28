import { get } from "./Common";

export default function getMemberData(memberId) {
  return get("family-members/" + memberId);
}
