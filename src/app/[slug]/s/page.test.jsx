import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ResultPage from "./page";
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
  useParams: jest.fn(),
  usePathname: jest.fn(),
  useSearchParams: jest.fn(),
}));
jest.mock("../../../components/TopNavbar", () => () => (
  <div>Mock TopNavbar</div>
));
jest.mock("../../../components/SideBar", () => () => <div>Mock SideBar</div>);
jest.mock("../../../components/ResultScreen", () => () => (
  <div>Mock ResultScreen</div>
));

describe("ResultPage Component", () => {
  it("renders correctly", () => {
    render(<ResultPage />);
    expect(screen.getByText("Mock TopNavbar")).toBeInTheDocument();
    expect(screen.getByText("Mock SideBar")).toBeInTheDocument();
    expect(screen.getByText("Mock ResultScreen")).toBeInTheDocument();
  });
});
