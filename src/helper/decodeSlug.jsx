import {
  PRICE_RANGE,
  BRANDS_AND_MODELS,
  YERAS,
  CITIES,
  DISTANCE,
  FUEL_TYPE,
  BODY_TYPE,
  TRANSMISSION,
  OWNER,
} from "@/constants"; // Import your constants

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
    Automatic: "transmission",
    Manual: "transmission",
    Petrol: "fuel_type",
    Diesel: "fuel_type",
    CNG: "fuel_type",
    Hatchback: "body_type",
    Sedan: "body_type",
    SUV: "body_type",
    MUV: "body_type",
  };

  const extractNumber = (str) => {
    const match = str.match(/\d+/);
    return match ? match[0] : null;
  };

  let categoryValue = null;

  parts.forEach((part, index) => {
    if (keyMapping[part]) {
      const key = keyMapping[part];
      if (key === "city") {
        // Assuming city is always at the end
        filters[key] = [parts.slice(index).join("-").replace(/^in-/, "")];
      } else if (
        key === "transmission" ||
        key === "fuel_type" ||
        key === "body_type"
      ) {
        filters[key] = [part]; // Set the value directly
      } else if (key === "category") {
        // Special case for "category"
        categoryValue = "used";
      } else {
        // For other keys, extract the number and use the next part as the value
        filters[key] = [extractNumber(parts[index + 1])];
      }
    }
  });

  if (categoryValue) {
    filters.category = [categoryValue];
  }

  // Decode and parse the filterObject if it's provided
  if (filterObjectString) {
    Object.assign(filters, filterObjectString);
  }

  return filters;
}
