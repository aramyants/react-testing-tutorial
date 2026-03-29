import { render, screen } from '@testing-library/react';
import { Greet } from './greet';

describe('Greet component', () => {
  test('renders correctly', () => {
    render(<Greet />);
    const greetElement = screen.getByText(/hello/i);
    expect(greetElement).toBeInTheDocument();
  });
});

describe('Was nested', () => {
  test('renders with a name', () => {
    const name = 'Aram';
    render(<Greet name={name} />);
    const greetElement = screen.getByText(`Hello, ${name}!`);
    expect(greetElement).toBeInTheDocument();
  });
});
