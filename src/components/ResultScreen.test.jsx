import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { FilterContext } from "@/context/FilterStore";
import ResultScreen from "./ResultScreen";

// Mock the useContext hook for testing
jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: jest.fn(),
}));

describe("ResultScreen", () => {
  it("clicking 'Clear all' button calls clearAll function", () => {
    // Mock the useContext values
    const mockContext = {
      filters: {
        city: ["City1"],
        category: ["Category1"],
        product_type: ["Type1"],
        otherFilter: ["Value1"],
      },
      removeFilter: jest.fn(),
      clearAll: jest.fn(), // Mock the clearAll function
    };
    React.useContext.mockReturnValue(mockContext);

    // Render the ResultScreen component
    const { getByText } = render(<ResultScreen />);

    // Find and click the 'Clear all' button
    const clearAllButton = getByText("Clear all");
    fireEvent.click(clearAllButton);

    // Check if the clearAll function was called
    expect(mockContext.clearAll).toHaveBeenCalled();
  });
});
