import { FilterContext } from "@/context/FilterStore";
import React, { useContext } from "react";

const ResultScreen = () => {
  const { filters, updateFilters, setFilters } = useContext(FilterContext);

  const removeFilter = (category, value) => {
    const updatedFilters = {
      ...filters,
      [category]: filters[category].filter((item) => item !== value),
    };
    setFilters(updatedFilters);
  };
  const skipKeys = ["city", "category", "product_type"];
  const filterItems = Object.entries(filters).flatMap(([key, values]) => {
    // Skip the keys that we don't want to render
    if (skipKeys.includes(key)) return [];
    return values.map((value) => ({
      key,
      value:
        key === "min_year"
          ? `${value} & above`
          : key === "max_mileage"
          ? `${value} Kms or less`
          : value,
    }));
  });

  return (
    <div className="flex flex-wrap h-[40px] my-4">
      {filterItems.map((filterItem, index) => {
        return (
          <div
            key={index}
            className="flex items-center text-purple-600 bg-white text-xs font-bold px-4 py-2 rounded m-2 hover:bg-purple-200 cursor-pointer"
          >
            {filterItem.value}{" "}
            <button
              onClick={() => removeFilter(filterItem.key, filterItem.value)}
              className="ml-2 rounded-full p-1 focus:outline-none"
            >
              ×
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ResultScreen;
