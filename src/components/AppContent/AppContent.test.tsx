import { render, screen, waitFor } from "@testing-library/react";
import AppContent from "./AppContent";
import { BrowserRouter } from "react-router-dom";

const mockNavigate = jest.fn();
// Mock the useRoutes hook
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"), // Import and retain default exports
  useRoutes: jest.fn().mockReturnValue(<div>Mocked Route Content</div>), // Mock the useRoutes function
  useNavigate: () => mockNavigate,
}));

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
    await waitFor(() => {
      const dashboardText = screen.getByText(/Dashboard/i);
      expect(dashboardText).toBeInTheDocument();
    });
  });
});
