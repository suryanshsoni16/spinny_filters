import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { FilterContext } from "@/context/FilterStore";
import CommonFiltersCheckRadio from "./CommonFiltersCheckRadio";
jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: jest.fn(),
}));

describe("CommonFiltersCheckRadio", () => {
  it("selects a Checkbox option when clicked", () => {
    const mockContext = {
      filters: {
        min_year: [], 
      },
      updateFilters: jest.fn(), 
    };
    React.useContext.mockReturnValue(mockContext);
    const { getByLabelText } = render(
      <CommonFiltersCheckRadio
        filterName="Year"
        options={["2020", "2021", "2022"]}
        type="Checkbox"
        suffix="model"
      />
    );

    const checkboxOption = getByLabelText("2020 model");

    fireEvent.click(checkboxOption);

    expect(mockContext.updateFilters).toHaveBeenCalledWith("min_year", [
      "2020",
    ]);
  });
});
