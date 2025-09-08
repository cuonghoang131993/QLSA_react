import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AppContent from "./AppContent";
import * as store from "store/index";


const mockFn = jest.fn();
// Mock the useRoutes hook
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"), // Import and retain default exports
  useRoutes: jest.fn().mockReturnValue(<div>Mocked Route Content</div>), // Mock the useRoutes function
  useNavigate: () => mockFn,
}));
jest.spyOn(store, "useAppSelector").mockImplementation(mockFn);

describe("AppContent tests", () => {
  it("should return loading fallback 1", async () => {
    // Arrange
    render(
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    );

    // Act
    window.history.pushState({}, "", "/dashboard");

    // Assert
    // await waitFor(() => {
    //   const dashboardText = screen.getByText(/Dashboard/i);
    //   expect(dashboardText).toBeInTheDocument();
    // });
  });
});
