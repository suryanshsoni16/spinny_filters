// Import the useRouter hook from 'next/router'
"use client";
import {
  useParams,
  usePathname,
  useSearchParams,
  useRouter,
} from "next/navigation";
import TopNavbar from "../../../components/TopNavbar";
import SideBar from "../../../components/SideBar";
import ResultScreen from "../../../components/ResultScreen";
import { FilterContext } from "@/context/FilterStore";
import { useContext, useEffect } from "react";
import decodeSlug from "@/helper/decodeSlug";
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from "@/helper/localStorageHelper";
import { PRICE_RANGE } from "@/constants";
import createSlug from "@/helper/createSlug";
// import createSlug from "@/helper/createSlug";
// import decodeSlug from "@/helper/decodeSlug";
// Your ResultPage component
export default function ResultPage() {
  const { filters, updateFilters, setFilters } = useContext(FilterContext);
  const searchParams = useSearchParams();
  const search = searchParams.get("filterObject");
  const params = useParams();
  const { slug } = params;
  const router = useRouter();

  useEffect(() => {
    if (slug) {
      let decodedSearch = {};
      try {
        if (search) {
          decodedSearch = JSON.parse(decodeURIComponent(search));
        }
      } catch (error) {
        console.error("Error parsing filterObject:", error);
      }

      const newFilters = decodeSlug(slug, decodedSearch);
      console.log("slugslug", newFilters);
      setFilters(newFilters);
      const lastAppliedFilters = getLocalStorageItem("lastAppliedFilters");
      if (!lastAppliedFilters) {
        setLocalStorageItem("lastAppliedFilters", {
          ...newFilters,
          min_price: [PRICE_RANGE.min],
          max_price: [PRICE_RANGE.max],
        });
      }
      if (!newFilters.city) {
        const updatedFilters = { ...newFilters };
        if (lastAppliedFilters && lastAppliedFilters.city) {
          updatedFilters.city = lastAppliedFilters.city;
        } else {
          updatedFilters.city = ["Noida"];
        }
        router.push(`/${createSlug(updatedFilters)}`);
      }
    }
  }, [search, slug]);

  // used-upto-1-owner-maruti-suzuki-i20-petrol-automatic-hatchback-cars-from-2020-under-10000-kms-over-1-lakh-rs-under-5-lakh-rs-in-delhi-ncr/s/
  return (
    <div className="flex justify-center min-h-screen">
      <div className="max-w-[1440px]  md:mx-auto w-full">
        <div className="w-full bg-white shadow-sm">
          <TopNavbar />
        </div>
        <div className="flex bg-[#FAFAFA]">
          <div className="w-[30%]">
            <SideBar />
          </div>
          <div className="max-h-[300px] overflow-y-scroll shadow-lg border-[1px] border-solid border-gray-100 mt-4 mr-4q  ">
            <ResultScreen />
          </div>
        </div>
      </div>
    </div>
  );
}
