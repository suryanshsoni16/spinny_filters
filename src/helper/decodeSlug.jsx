export default function decodeSlug(slug, filterObjectString) {
  const filters = {};
  const parts = slug.split("-");

  // Define a mapping of slug parts to filter keys
  const keyMapping = {
    used: "category",
    upto: "no_of_owner",
    from: "min_year",
    under: "max_mileage",
    over: "min_price",
    in: "city", 
  };
  const extractNumber = (str) => {
    const match = str.match(/\d+/);
    return match ? match?.[0] : null;
  };

  parts.forEach((part, index) => {
    if (keyMapping[part]) {
      const key = keyMapping[part];
      if (key === "city") {
        // Assuming city is always at the end
        filters[key] = [parts.slice(index).join("-").replace(/^in-/, "")];
      } else {
        // For other keys, extract the number and use the next part as the value
        filters[key] = [extractNumber(parts[index + 1])];
      }
    }
  });

  // Decode and parse the filterObject if it's provided
  if (filterObjectString) {
    Object.assign(filters, filterObjectString);
  }

  return filters;
}
