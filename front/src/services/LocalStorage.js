export function removeItem(itemToRemove) {
   return localStorage.removeItem(itemToRemove);
}

export function getItem(item) {
   return localStorage.getItem(item);
}

export function addItem(localeStorageName, newItem) {
   return localStorage.setItem(localeStorageName, newItem);
}