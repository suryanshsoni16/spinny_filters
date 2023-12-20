// Accepts item (string) and data (JSON)
export const setLocalStorageItem = (item, data) => {
  if (localStorage)
    localStorage.setItem(
      item,
      typeof data === "object" ? JSON.stringify(data) : data
    );
};

// Accepts item (string) and returns JSON data
export const getLocalStorageItem = (item) => {
  const receivedItem =
    !(typeof window === "undefined") && localStorage && item in localStorage
      ? localStorage.getItem(item)
      : "";

  try {
    return receivedItem ? JSON.parse(receivedItem) : "";
  } catch (e) {
    return receivedItem;
  }
};
