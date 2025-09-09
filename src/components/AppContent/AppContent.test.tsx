import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AppContent from "./AppContent";
import { PERMISSIONS } from "constants/permissions";
import * as store from "store/index";
import * as permissionSelector from "store/permission/selector";

const mockFn = jest.fn();
// Mock the useRoutes hook
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"), // Import and retain default exports
  useRoutes: jest.fn().mockReturnValue(<div>Mocked Route Content</div>), // Mock the useRoutes function
  useNavigate: () => mockFn,
}));

describe("AppContent tests", () => {
  it("should return loading fallback 1", async () => {
    // Arrange
    jest.spyOn(permissionSelector, "selectCurrentUserPermissionsLoading").mockReturnValue(false);
    jest.spyOn(permissionSelector, "selectCurrentUserPermissionsList").mockReturnValue({
      Items: [{
        RoleId: "TestRole",
        FunctionId: PERMISSIONS.REPORT,
      }],
      TotalPages: 0,
      Page: 0,
      Size: 0,
      TotalRecords: 0
    });
    jest.spyOn(store, "useAppSelector").mockImplementation((fn: any) => fn());

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
