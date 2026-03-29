import { screen, render } from "@testing-library/react";
import { Counter } from "./counter";

describe("Counter", () => {
  test("renders the Counter component correctly", () => {
    render(<Counter />);

    const headingElement = screen.getByRole("heading", { name: /You clicked 0 times/i });
    expect(headingElement).toBeInTheDocument();

    const buttonElement = screen.getByRole("button", { name: /Increment/i });
    expect(buttonElement).toBeInTheDocument();
  });
});

