// Import the useRouter hook from 'next/router'
"use client";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import TopNavbar from "../../../components/TopNavbar";
import SideBar from "../../../components/SideBar";
import ResultScreen from "../../../components/ResultScreen";
// import { FilterContext } from "@/context/FilterStore";
// import { useContext, useEffect } from "react";
// import createSlug from "@/helper/createSlug";
// import decodeSlug from "@/helper/decodeSlug";
// Your ResultPage component
export default function ResultPage() {
  // const { filters, updateFilters, setFilters } = useContext(FilterContext);
  // const searchParams = useSearchParams();
  // const search = searchParams.get("filterObject");
  // const params = useParams();
  // const { slug } = params;
  // console.log(
  //   "xxxxxxxxx",
  //   JSON.parse(decodeURIComponent(search)),
  //   decodeSlug(params?.slug, JSON.parse(decodeURIComponent(search)))
  // );

//  useEffect(() => {
//    if (slug) {
//      let decodedSearch = {};
//      try {
//        if (search) {
//          decodedSearch = JSON.parse(decodeURIComponent(search));
//        }
//      } catch (error) {
//        console.error("Error parsing filterObject:", error);
//      }

//      const newFilters = decodeSlug(slug, decodedSearch);
//      setFilters(newFilters);
//    }
//  }, [slug, search, setFilters]);

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
          <div className="max-h-[300px] overflow-y-scroll">
            <ResultScreen />
          </div>
        </div>
      </div>
    </div>
  );
}
