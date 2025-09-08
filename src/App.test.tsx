import { renderWithProviders } from "utils/test-utils";
import { waitFor, screen } from "@testing-library/react";

import App from "./App";
import * as store from "store/index";

const mockNavigate = jest.fn();
// Mock the useRoutes hook
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"), // Import and retain default exports
  useRoutes: jest.fn().mockReturnValue(<div>Mocked Route Content</div>), // Mock the useRoutes function
  useNavigate: () => mockNavigate,
}));
jest.spyOn(store, "useAppDispatch").mockReturnValue(() => {});

describe("App tests", () => {
  it("should contains the heading in login page 1", async () => {
    // Arrange
    renderWithProviders(<App />);

    // Act

    // Assert
    await waitFor(() => {
      const loginText = screen.getAllByText(/Login/i);
      expect(loginText[0]).toHaveClass("text-4xl");
    });
  });
});
