import { FilterContext } from "@/context/FilterStore";
import React, { useContext } from "react";

const ResultScreen = () => {
  const { filters, removeFilter, clearAll } = useContext(FilterContext);
  const skipKeys = ["city", "category", "product_type"];
  const filterItems = Object.entries(filters).flatMap(([key, values]) => {
    if (skipKeys.includes(key)) return [];
    return values.map((value) => ({
      key,
      value,
    }));
  });
  const handleRemoveClick = (e, key, value) => {
    e.stopPropagation();
    removeFilter(key, value);
  };
  return (
    <div className="flex flex-wrap h-[40px] my-4">
      <div
        onClick={() => clearAll()}
        // key={index}
        className="flex items-center text-purple-600 bg-white text-xs font-bold px-4 py-2 rounded m-2 hover:bg-purple-200 cursor-pointer"
      >
        Clear all
        <button
          onClick={() => clearAll()}
          className="ml-2 rounded-full p-1 focus:outline-none"
        >
          ×
        </button>
      </div>
      {filterItems.map((filterItem, index) => {
        return (
          <div
            onClick={(e) =>
              handleRemoveClick(e, filterItem.key, filterItem.value)
            }
            key={index}
            className="flex items-center text-purple-600 bg-white text-xs font-bold px-4 py-2 rounded m-2 hover:bg-purple-200 cursor-pointer"
          >
            {filterItem.value}
            {filterItem.key === "min_year"
              ? `& above`
              : filterItem.key === "max_mileage"
              ? `Kms or less`
              : ""}
            <button
              onClick={(e) =>
                handleRemoveClick(e, filterItem.key, filterItem.value)
              }
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
