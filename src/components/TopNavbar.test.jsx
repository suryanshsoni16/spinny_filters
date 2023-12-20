import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TopNavbar from "./TopNavbar"; 
jest.mock("./Dropdown", () => () => <div>Mock Dropdown</div>);
describe("TopNavbar Component", () => {
  it("renders correctly", () => {
    render(<TopNavbar />);
    expect(screen.getByText("Filters")).toBeInTheDocument();
    expect(screen.getByText("Mock Dropdown")).toBeInTheDocument();
  });

});
