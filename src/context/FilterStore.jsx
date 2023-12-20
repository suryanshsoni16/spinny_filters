"use client";
import createSlug from "@/helper/createSlug";
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from "@/helper/localStorageHelper";

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

  const removeFilter = (filterType, value) => {
    setFilters((prevFilters) => {
      const newFilters = { ...prevFilters };
      if (value === undefined) {
        delete newFilters[filterType];
      } else {
        newFilters[filterType] = newFilters[filterType].filter(
          (item) => item !== value
        );
      }
      setLocalStorageItem("lastAppliedFilters", {
        ...newFilters,
        make: [],
        model: [],
      });
      router.push(`/${createSlug(newFilters)}`);
      return { ...newFilters, make: [], model: [] };
    });
  };
  const clearAll = () => {
    const skipKeys = ["city", "category", "product_type"];
    setFilters((prevFilters) => {
      const retainedFilters = Object.keys(prevFilters).reduce((acc, key) => {
        if (skipKeys.includes(key)) {
          acc[key] = prevFilters[key];
        }
        return acc;
      }, {});

      setLocalStorageItem("lastAppliedFilters", {
        ...retainedFilters,
        make: [],
        model: [],
      });
      router.push(`/${createSlug(retainedFilters)}`);
      return { ...retainedFilters, make: [], model: [] };
    });
  };

  useEffect(() => {
    const lastAppliedFilters = getLocalStorageItem("lastAppliedFilters") || {};
    setFilters(lastAppliedFilters);
  }, []);
  return (
    <FilterContext.Provider
      value={{ filters, updateFilters, setFilters, removeFilter, clearAll }}
    >
      {children}
    </FilterContext.Provider>
  );
};
