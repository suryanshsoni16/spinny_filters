import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SideBar from "./SideBar";

jest.mock("./Filters/PriceRange", () => () => (
  <div data-testid="mock-price-range">Mock PriceRange</div>
));

describe("SideBar Component", () => {
  it("renders without crashing", () => {
    render(<SideBar />);
    const mockPriceRange = screen.getByTestId("mock-price-range");
    expect(mockPriceRange).toBeInTheDocument();
  });
});
