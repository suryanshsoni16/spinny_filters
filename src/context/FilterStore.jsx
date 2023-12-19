"use client";

import { PRICE_RANGE } from "@/constants";
import createSlug from "@/helper/createSlug";
import {
  setLocalStorageItem,
  getLocalStorageItem,
} from "@/hooks/useLocalStorage";
import { useRouter } from "next/navigation";
import React, { useState, createContext, useEffect } from "react";
export const FilterContext = createContext();
export const FilterProvider = ({ children }) => {
  const router = useRouter();
  const [filters, setFilters] = useState(
    getLocalStorageItem("lastAppliedFilters")
  );
  const updateFilters = (filterType, value) => {
    setFilters((prevFilters) => {
      const newFilters = {
        ...prevFilters,
        [filterType]: value,
      };
      setLocalStorageItem("lastAppliedFilters", {
        ...getLocalStorageItem("lastAppliedFilters"),
        [filterType]: value,
      });
      router.push(`/${createSlug(newFilters)}`);
      return newFilters;
    });
    // setLocalStorageItem("lastAppliedFilters", {
    //   ...getLocalStorageItem("lastAppliedFilters"),
    //   [filterType]: value,
    // });
    // router.push(`/${createSlug(getLocalStorageItem("lastAppliedFilters"))}`);
  };

  return (
    <FilterContext.Provider value={{ filters, updateFilters, setFilters }}>
      {children}
    </FilterContext.Provider>
  );
};
