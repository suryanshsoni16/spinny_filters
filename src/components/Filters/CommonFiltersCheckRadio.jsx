import React, { useContext, useState } from "react";
import CustomCheckbox from "./CustomCheckbox";
import CustomRadioButton from "./CustomRadioButton";
import { FilterContext } from "@/context/FilterStore";
const filterNameToKeyMap = {
  Year: "min_year",
  Distance: "max_mileage",
  "Fuel Type": "fuel_type",
  "Body Type": "body_type",
  Transmission: "transmission",
  Owner: "no_of_owner",
};

const CommonFiltersCheckRadio = ({
  filterName,
  options = [],
  type,
  suffix,
}) => {
  const { filters, updateFilters } = useContext(FilterContext);
  const filterKey = filterNameToKeyMap[filterName];
  const selectedOptions = filters[filterKey] || [];
  const handleOptionChange = (option) => {
    let newSelectedOptions = [];

    if (type === "Checkbox") {
      newSelectedOptions = selectedOptions.includes(option)
        ? selectedOptions.filter((item) => item !== option)
        : [...selectedOptions, option];
    } else if (type === "Radio") {
      newSelectedOptions =
        selectedOptions.length === 0 || selectedOptions?.[0] !== option
          ? [option]
          : [];
    }
    if (filterKey) {
      updateFilters(filterKey, newSelectedOptions);
    }
  };

  return (
    <div className="rounded-md">
      <div className="flex items-center justify-between py-2 px-4">
        <p className="text-secondary text-base font-semibold">{filterName}</p>
      </div>
      <hr />
      <div>
        {options.map((option) => (
          <div key={option} className="flex items-center my-3 ml-4">
            {type === "Checkbox" ? (
              <>
                <CustomCheckbox
                  checked={selectedOptions.includes(option)}
                  onChange={() => handleOptionChange(option)}
                />
                <span className="ml-2 text-secondary text-base">
                  {option} {suffix}{" "}
                </span>
              </>
            ) : (
              <>
                <CustomRadioButton
                  checked={selectedOptions.includes(option)}
                  onChange={() => handleOptionChange(option)}
                  value={option}
                />
                <span className="ml-2 text-secondary text-base">
                  {option} {suffix}{" "}
                </span>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommonFiltersCheckRadio;
