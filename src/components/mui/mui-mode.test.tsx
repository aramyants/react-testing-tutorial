import { render, screen } from '../../test-utils';
import { MuiMode } from './mui-mode';

describe('MuiMode', () => {
  test('renders the MuiMode component correctly', () => {
    render(<MuiMode />);

    const headingElement = screen.getByRole('heading');
    expect(headingElement).toHaveTextContent('dark mode');
  });
});
