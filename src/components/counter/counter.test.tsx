import { screen, render } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Counter } from "./counter";

describe("Counter", () => {
  test("renders the Counter component correctly", () => {
    render(<Counter />);

    const headingElement = screen.getByRole("heading", { name: /You clicked 0 times/i });
    expect(headingElement).toBeInTheDocument();

    const buttonElement = screen.getByRole("button", { name: /Increment/i });
    expect(buttonElement).toBeInTheDocument();
  });

  test('renders a count of 0', () => {
    render(<Counter />);

    const headingElement = screen.getByRole("heading", { name: /You clicked 0 times/i });
    expect(headingElement).toHaveTextContent("You clicked 0 times");
  });

  test('increments the count when the button is clicked', async () => {
    user.setup();
    render(<Counter />);
    const buttonElement = screen.getByRole("button", { name: /Increment/i });
    await user.click(buttonElement);

    const headingElement = screen.getByRole("heading", { name: /You clicked 1 times/i });
    expect(headingElement).toHaveTextContent("You clicked 1 times");
  });
});
