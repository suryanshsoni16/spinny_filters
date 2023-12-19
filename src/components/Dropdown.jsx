import { CITIES } from "@/constants";
import { FilterContext } from "@/context/FilterStore";
import React, { useContext, useState } from "react";
const Dropdown = () => {
  const { filters, updateFilters } = useContext(FilterContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleOptionSelect = (option) => {
    setIsOpen(false);
    updateFilters("city", [option]);
  };

  return (
    <div className="relative inline-block text-left ml-8">
      <div>
        <button
          type="button"
          onClick={toggleDropdown}
          className="inline-flex justify-center w-full p-3 rounded-3xl text-sm font-medium text-gray-900 border  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
        >
          {filters?.city[0]}
          <svg
            className="-mr-1 ml-2 h-5 w-5 mt-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 12l-8-8 1.5-1.5L10 9l6.5-6.5L18 4l-8 8z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top absolute left-1/2 z-50 transform -translate-x-1/2 mt-2 w-28 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {CITIES.map((option) => (
              <button
                key={option}
                onClick={() => handleOptionSelect(option)}
                className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 text-center"
                role="menuitem"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
