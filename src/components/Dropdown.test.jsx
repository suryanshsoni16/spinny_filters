import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { FilterContext } from "@/context/FilterStore";
import Dropdown from "./Dropdown";
jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: jest.fn(),
}));

describe("Dropdown", () => {
  it("selects an option from the dropdown", () => {
    const mockContext = {
      filters: {
        city: ["City1"],
      },
      updateFilters: jest.fn(), 
    };
    React.useContext.mockReturnValue(mockContext);

    const { getByText, getByRole } = render(<Dropdown isHomepage={false} />);

    // Find the button element and click to open the dropdown
    const button = getByRole("button");
    fireEvent.click(button);

    const option = getByText("Delhi NCR");
    fireEvent.click(option);

    expect(mockContext.updateFilters).toHaveBeenCalledWith("city", [
      "Delhi NCR",
    ]);
  });
});
