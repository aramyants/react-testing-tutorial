import { render, screen } from '@testing-library/react';
import { Application } from './application';

describe('Application', () => {
  test('renders the form correctly', () => {
    render(<Application />);

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();

    const sectionHeading = screen.getByRole('heading', { name: /section 1/i });
    expect(sectionHeading).toBeInTheDocument();

    const paragraph = screen.getByText(/all fields are mandatory/i);
    expect(paragraph).toBeInTheDocument();

    const closeButton = screen.getByTitle(/close/i);
    expect(closeButton).toBeInTheDocument();

    const image = screen.getAllByAltText(/a person with a laptop/i)[0];
    expect(image).toBeInTheDocument();

    const customElement = screen.getByTestId('custom-element');
    expect(customElement).toBeInTheDocument();

    const nameInput = screen.getByRole('textbox', { name: /name/i });
    expect(nameInput).toBeInTheDocument();

    const nameInputByLabel = screen.getByLabelText(/name/i, {
      selector: 'input',
    });
    expect(nameInputByLabel).toBeInTheDocument();

    const nameInputByPlaceholder = screen.getByPlaceholderText(/fullname/i);
    expect(nameInputByPlaceholder).toBeInTheDocument();

    const nameInputByValue = screen.getByDisplayValue(/aram/i);
    expect(nameInputByValue).toBeInTheDocument();

    const bioTextarea = screen.getByRole('textbox', { name: /bio/i });
    expect(bioTextarea).toBeInTheDocument();

    const jobLocationSelect = screen.getByRole('combobox');
    expect(jobLocationSelect).toBeInTheDocument();

    const termsCheckbox = screen.getByRole('checkbox');
    expect(termsCheckbox).toBeInTheDocument();

    const termsCheckboxByLabel = screen.getByLabelText(
      /i agree with terms and conditions/i
    );
    expect(termsCheckboxByLabel).toBeInTheDocument();

    const submitButton = screen.getByRole('button');
    expect(submitButton).toBeInTheDocument();
  });
});
