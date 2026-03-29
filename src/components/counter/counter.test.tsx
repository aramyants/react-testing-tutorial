import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Counter } from './counter';

describe('Counter', () => {
  test('renders the Counter component correctly', () => {
    render(<Counter />);

    const headingElement = screen.getByRole('heading', {
      name: /You clicked 0 times/i,
    });
    expect(headingElement).toBeInTheDocument();

    const buttonElement = screen.getByRole('button', { name: /Increment/i });
    expect(buttonElement).toBeInTheDocument();
  });

  test('renders a count of 0', () => {
    render(<Counter />);

    const headingElement = screen.getByRole('heading', {
      name: /You clicked 0 times/i,
    });
    expect(headingElement).toHaveTextContent('You clicked 0 times');
  });

  test('increments the count when the button is clicked', async () => {
    const user = userEvent.setup();
    render(<Counter />);
    const buttonElement = screen.getByRole('button', { name: /Increment/i });
    await user.click(buttonElement);

    const headingElement = screen.getByRole('heading', {
      name: /You clicked 1 times/i,
    });
    expect(headingElement).toHaveTextContent('You clicked 1 times');
  });

  test('sets the count to the specified amount when the Set Amount button is clicked', async () => {
    const user = userEvent.setup();
    render(<Counter />);
    const inputElement = screen.getByRole('spinbutton', { name: /amount/i });
    await user.type(inputElement, '10');
    expect(inputElement).toHaveValue(10);

    const setAmountButton = screen.getByRole('button', { name: /Set Amount/i });
    await user.click(setAmountButton);

    const headingElement = screen.getByRole('heading', {
      name: /You clicked 10 times/i,
    });
    expect(headingElement).toHaveTextContent('You clicked 10 times');
  });

  test('elements are focused in the correct order when tabbing through the component', async () => {
    const user = userEvent.setup();
    render(<Counter />);

    const amountInput = screen.getByRole('spinbutton', { name: /amount/i });
    const setAmountButton = screen.getByRole('button', { name: /Set Amount/i });
    const incrementButton = screen.getByRole('button', { name: /Increment/i });

    await user.tab();
    expect(incrementButton).toHaveFocus();

    await user.tab();
    expect(amountInput).toHaveFocus();

    await user.tab();
    expect(setAmountButton).toHaveFocus();
  });
});
