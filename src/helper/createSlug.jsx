export default function createSlug(filters) {
  let slugParts = [];
  let queryParams = {};
  const sequence = [
    "category",
    "no_of_owner",
    "make",
    "model",
    "fuel_type",
    "transmission",
    "body_type",
    "product_type",
    "min_year",
    "max_mileage",
    "min_price",
    "max_price",
    "city",
  ];
  sequence.forEach((key) => {
    if (filters[key]) {
      if (filters[key].length === 1) {
        let value = filters[key][0].toString();
        switch (key) {
          case "no_of_owner":
            slugParts.push("upto-" + value + "-owner");
            break;
          case "min_year":
            slugParts.push("from-" + value);
            break;
          case "max_mileage":
            slugParts.push("under-" + value + "-kms");
            break;
          case "min_price":
            slugParts.push("over-" + value + "-lakh-rs");
            break;
          case "max_price":
            slugParts.push("under-" + value + "-lakh-rs");
            break;
          case "city":
            slugParts.push("in-" + value.replace(/\s+/g, "-").toLowerCase());
            break;
          default:
            slugParts.push(value);
            break;
        }
      } else if (filters[key].length > 1) {
        queryParams[key] = filters[key];
      }
    }
  });

  let slug = slugParts.join("-") + "/s/";
  if (Object.keys(queryParams).length > 0) {
    slug += "?filterObject=" + JSON.stringify(queryParams).replace(/"/g, "%22");
  }

  return slug;
}
