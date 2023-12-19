"use client";

import Dropdown from "@/components/Dropdown";
import { PRICE_RANGE } from "@/constants";
import { FilterContext } from "@/context/FilterStore";
import { setLocalStorageItem } from "@/hooks/useLocalStorage";
import Image from "next/image";
import { useContext, useEffect } from "react";

export default function Home() {
  const { filters, updateFilters, setFilters } = useContext(FilterContext);

  useEffect(() => {
    setLocalStorageItem("lastAppliedFilters", {
      min_price: [PRICE_RANGE.min],
      max_price: [PRICE_RANGE.max],
      category: ["used"],
      city: ["noida"],
      product_type: ["cars"],
      make: [],
      model: [],
    });
    setFilters({
      min_price: [PRICE_RANGE.min],
      max_price: [PRICE_RANGE.max],
      category: ["used"],
      city: ["noida"],
      product_type: ["cars"],
      make: [],
      model: [],
    });
  }, []);
  return (
    <div>
      <Dropdown />
    </div>
  );
}
