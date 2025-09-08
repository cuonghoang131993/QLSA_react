import { render, screen } from "@testing-library/react";
import Loading from "./Loading";

describe("Loading tests", () => {
  it("should return loading fallback 1", () => {
    // Arrange
    render(<Loading />);

    // Act

    // Assert
    const loadingText = screen.getByText(/Loading/i);
    expect(loadingText).toBeInTheDocument();
  });
});
