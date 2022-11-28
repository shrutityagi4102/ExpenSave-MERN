export function makeHousehold() {
  const admins = [makeMember(1, "John", 100)];
  const members = [makeMember(1, "John", 100), makeMember(2, "Jim", 100)];

  return {
    householdId: 1,
    totalUsed: 3020 * 4,
    totalAllowance: 20000,
    admins,
    members,
    name: "Test Household",
  };
}

export function makeMember(id, name, allowance) {
  return {
    id,
    username: "test user",
    name,
    allowance,
    used: 3020,
    expenses: [
      {
        category: "Housing",
        total: 1000,
        items: [makeItem("res", "wilmot", 1000, Date.now())],
      },
      {
        category: "School",
        total: 2000,
        items: [makeItem("Textbooks", "Intro to Quantum", 2000, Date.now())],
      },
      {
        category: "Groceries",
        total: 20,
        items: [makeItem("Fortinos", "steak", 20, Date.now())],
      },
    ],
  };
}

export function makeItem(title, description, amount, date) {
  return { title, description, amount, date };
}
