import { Application } from "./application";
import { render, screen } from "@testing-library/react";

describe("Application", () => {
  test("renders the form correctly", () => {
    render(<Application />);

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();

    const sectionHeading = screen.getByRole("heading", { name: /section 1/i });
    expect(sectionHeading).toBeInTheDocument();


    const nameInput = screen.getByRole('textbox', { name: /name/i })
    expect(nameInput).toBeInTheDocument();

    const nameInputByLabel = screen.getByLabelText(/name/i, { selector: 'input' })
    expect(nameInputByLabel).toBeInTheDocument();

    const bioTextarea = screen.getByRole('textbox', { name: /bio/i })
    expect(bioTextarea).toBeInTheDocument();

    const jobLocationSelect = screen.getByRole('combobox')
    expect(jobLocationSelect).toBeInTheDocument();

    const termsCheckbox = screen.getByRole('checkbox')
    expect(termsCheckbox).toBeInTheDocument();

    const termsCheckboxByLabel = screen.getByLabelText(/i agree with terms and conditions/i)
    expect(termsCheckboxByLabel).toBeInTheDocument();

    const submitButton = screen.getByRole('button')
    expect(submitButton).toBeInTheDocument();
  });
});

