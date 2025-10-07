// inventory.mjs
const inventory = [];

export function addItem(itemName) {
  inventory.push(itemName);
  console.log(`${itemName} added to inventory.`);
}

export function removeItem(itemName) {
  const index = inventory.indexOf(itemName);
  if (index !== -1) {
    inventory.splice(index, 1);
    console.log(`${itemName} removed from inventory.`);
  } else {
    console.log(`${itemName} not found.`);
  }
}

export function listItems() {
  console.log("Current Inventory:");
  inventory.forEach((item) => console.log(`- ${item}`));
}
