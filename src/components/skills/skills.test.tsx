import { render, screen } from '@testing-library/react';
import { Skills } from './skills';

describe('Skills', () => {
  test('renders the skills list correctly', () => {
    const skills = ['JavaScript', 'React', 'Node.js'];
    render(<Skills skills={skills} />);

    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(skills.length);

    skills.forEach((skill) => {
      const listItem = screen.getByText(skill);
      expect(listItem).toBeInTheDocument();
    });
  });
});
