// Data structure for Tabs
export const allTabs = [
  { icon: "🧙‍♂️", label: "Front" },
  { icon: "🧑‍💻", label: "Back" },
];

const [Front, Back] = allTabs;
export const initialTabs = [Front, Back];

// Function to get the next Tab that is not in the current list
const getNextTab = (Tabs) => {
  const existing = new Set(Tabs);
  return allTabs.find((Tab) => !existing.has(Tab));
};

export default getNextTab;
