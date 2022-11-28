import { get } from "./Common";

export default function getHouseholdData(householdId) {
  return get("families/" + householdId);
}
