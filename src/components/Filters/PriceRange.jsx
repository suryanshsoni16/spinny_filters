import React, { useContext, useState } from "react";
import "./range.css";
import { PRICE_RANGE } from "@/constants";
import { FilterContext } from "@/context/FilterStore";
const PriceRange = ({
  minValueInitial = PRICE_RANGE.min,
  maxValueInitial = PRICE_RANGE.max,
}) => {
  // const { filters, updateFilters } = useContext(FilterContext);

  const [minValue, setMinValue] = useState(minValueInitial);
  const [maxValue, setMaxValue] = useState(maxValueInitial);

  const handleMinChange = (event) => {
    const value = Math.min(Number(event.target.value), maxValue - 10000);
    setMinValue(value);
    // updateFilters("min_price", [value]);
  };

  const handleMaxChange = (event) => {
    const value = Math.max(Number(event.target.value), minValue + 10000);
    setMaxValue(value);
    // updateFilters("max_price", [value]);
  };

  return (
    <div className="flex flex-col py-4">
      <div className="flex justify-between px-2 mb-1">
        <span className="text-lg font-bold text-primary">
          ₹ {minValue.toLocaleString()}
        </span>
        <span className="text-lg font-bold text-primary">
          {" "}
          ₹ {maxValue.toLocaleString()}
        </span>
      </div>
      <div className="relative">
        <input
          className="range range-primary w-full h-1 bg-gray-300 rounded-md outline-none"
          type="range"
          min="300000"
          max="800000"
          step="50000"
          value={minValue}
          onChange={handleMinChange}
        />
        <input
          className="range range-primary w-full h-1 bg-gray-300 rounded-md outline-none"
          type="range"
          min="300000"
          max="800000"
          step="50000"
          value={maxValue}
          onChange={handleMaxChange}
        />
        <div className="range-track absolute bg-purple-500 h-1 rounded-md"></div>
      </div>
      <div className="flex justify-between text-xs px-2 mt-1">
        <span>Minimum</span>
        <span>Maximum</span>
      </div>
    </div>
  );
};

export default PriceRange;
