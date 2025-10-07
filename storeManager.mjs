// storeManager.mjs
import { addItem, removeItem, listItems } from "./inventory.mjs";

addItem("Laptop");
addItem("Headphones");
addItem("Keyboard");
removeItem("Headphones");
listItems();

