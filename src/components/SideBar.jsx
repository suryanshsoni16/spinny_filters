import React from "react";
import PriceRange from "./Filters/PriceRange";
import BrandsAndModel from "./Filters/BrandsAndModel";
import CommonFiltersCheckRadio from "./Filters/CommonFiltersCheckRadio";
import {
  YERAS,
  DISTANCE,
  FUEL_TYPE,
  BODY_TYPE,
  TRANSMISSION,
  OWNER,
} from "@/constants";
const SideBar = () => {
  return (
    <div className="w-[285px] bg-white h-[100vh] ml-16 p-4 mr-8 mt-4 rounded-md border border-gray-300">
      <h2 className="text-gray-800 text-xl font-bold mb-4">Filters</h2>
      <ul className="space-y-2 overflow-y-auto max-h-[calc(100vh-150px)] pr-2">
        <li>
          <p className="text-secondary text-base font-semibold">Price Range</p>
          <PriceRange />
        </li>
        <li>
          <p className="text-secondary text-base font-semibold">
            Brands and Models
          </p>
          <BrandsAndModel />
        </li>
        <li>
          <CommonFiltersCheckRadio
            filterName="Year"
            options={YERAS}
            type="Radio"
            suffix="& above"
          />
        </li>
        <li>
          <CommonFiltersCheckRadio
            filterName="Distance"
            options={DISTANCE}
            type="Radio"
            suffix="Kms or less"
          />
        </li>
        <li>
          <CommonFiltersCheckRadio
            filterName="Fuel Type"
            options={FUEL_TYPE}
            type="Checkbox"
          />
        </li>
        <li>
          <CommonFiltersCheckRadio
            filterName="Body Type"
            options={BODY_TYPE}
            type="Checkbox"
          />
        </li>
        <li>
          <CommonFiltersCheckRadio
            filterName="Transmission"
            options={TRANSMISSION}
            type="Checkbox"
          />
        </li>
        <li>
          <CommonFiltersCheckRadio
            filterName="Owner"
            options={OWNER}
            type="Radio"
          />
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
