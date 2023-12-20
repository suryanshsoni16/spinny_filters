import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import PriceRange from "./PriceRange"; 
describe("PriceRange Component", () => {
  it("renders without crashing", () => {
    render(<PriceRange />);
  });
});
