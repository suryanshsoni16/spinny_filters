"use client";

import Dropdown from "@/components/Dropdown";
import { PRICE_RANGE } from "@/constants";
import { setLocalStorageItem } from "@/hooks/useLocalStorage";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
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
  }, []);
  return (
    <div>
      <Dropdown />
    </div>
  );
}
