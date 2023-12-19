import { BRANDS_AND_MODELS } from "@/constants";
import React, { useContext, useState } from "react";
import CustomCheckbox from "./CustomCheckbox";
import { FilterContext } from "@/context/FilterStore";

const AccordionItem = ({ brand, model }) => {
  const { filters, updateFilters } = useContext(FilterContext);
  const [isOpen, setIsOpen] = useState(false);

  const isBrandChecked = filters.make?.includes(brand);
  const checkedModels = model.reduce((acc, model) => {
    acc[model] = filters.model?.includes(model);
    return acc;
  }, {});

  const toggleBrandCheckbox = () => {
    if (isBrandChecked) {
      // Remove brand and all its model from filters
      const newBrands = filters.make.filter((b) => b !== brand);
      const newModels = filters.model.filter((m) => !model.includes(m));
      updateFilters("make", newBrands);
      updateFilters("model", newModels);
    } else {
      // Add brand and all its model to filters
      const newBrands = [...filters.make, brand];
      const newModels = [
        ...filters.model,
        ...model.filter((m) => !filters.model.includes(m)),
      ];
      updateFilters("make", newBrands);
      updateFilters("model", newModels);
    }
  };

  const toggleModelCheckbox = (model) => {
    const updatedModels = filters.model.includes(model)
      ? filters.model.filter((m) => m !== model)
      : [...filters.model, model];
    updateFilters("model", updatedModels);

    // Update make based on model selection
    const allModelsSelected =
      model || []?.every((m) => updatedModels.includes(m)) || false;
    const updatedBrands = allModelsSelected
      ? [...filters.make, brand].filter((v, i, a) => a.indexOf(v) === i) // Ensure unique make
      : filters.make.filter((b) => b !== brand);
    updateFilters("make", updatedBrands);
  };

  return (
    <div className=" rounded-md ">
      <div className="flex items-center justify-between py-2 px-4">
        <div className="flex items-center">
          <CustomCheckbox
            checked={isBrandChecked}
            onChange={toggleBrandCheckbox}
          />
          <span className="ml-4 text-[#2e054e] text-sm capitalize">
            {brand}
          </span>
        </div>
        <button onClick={() => setIsOpen(!isOpen)}>
          <svg
            className={`w-4 h-4 transform transition ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>{" "}
        </button>
      </div>
      <hr />

      <div
        className={`${
          isOpen ? "block max-h-[300px] overflow-y-auto mb-2" : "hidden"
        }`}
      >
        {model.map((model) => (
          <div key={model} className="flex items-center pl-10 pr-4 py-2">
            <CustomCheckbox
              checked={checkedModels[model] || false}
              onChange={() => toggleModelCheckbox(model)}
            />
            <span className="ml-4 text-[#2e054e] text-sm capitalize">
              {model}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const BrandsAndModel = () => {
  return (
    <div className=" max-h-[300px] overflow-y-auto mt-4 mb-2">
      {Object.entries(BRANDS_AND_MODELS).map(([brand, model], index) => (
        <AccordionItem key={index} brand={brand} model={model} />
      ))}
    </div>
  );
};

export default BrandsAndModel;
