"use client";

import Dropdown from "@/components/Dropdown";
import { PRICE_RANGE } from "@/constants";
import { FilterContext } from "@/context/FilterStore";
import { setLocalStorageItem } from "@/helper/localStorageHelper";
import Image from "next/image";
import { useContext, useEffect } from "react";

export default function Home() {
  const { filters, updateFilters, setFilters } = useContext(FilterContext);

  useEffect(() => {
    setLocalStorageItem("lastAppliedFilters", {
      min_price: [PRICE_RANGE.min],
      max_price: [PRICE_RANGE.max],
      category: ["used"],
      city: ["Noida"],
      product_type: ["cars"],
      make: [],
      model: [],
    });
    setFilters({
      min_price: [PRICE_RANGE.min],
      max_price: [PRICE_RANGE.max],
      category: ["used"],
      city: ["Noida"],
      product_type: ["cars"],
      make: [],
      model: [],
    });
  }, []);
  return (
    <>
      <div className="p-4 w-full bg-primary flex items-center">
        <p className="ml-6 text-white"> Filters</p>
        <Dropdown isHomepage />
      </div>
    </>
  );
}
