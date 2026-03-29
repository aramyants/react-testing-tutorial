import { render, screen } from '@testing-library/react';
import { Skills } from './skills';

describe('Skills', () => {
  const skills = ['JavaScript', 'React', 'Node.js'];
  test('renders the skills list correctly', () => {
    render(<Skills skills={skills} />);

    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(skills.length);

    skills.forEach((skill) => {
      const listItem = screen.getByText(skill);
      expect(listItem).toBeInTheDocument();
    });
  });

  test('renders Login button', () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.getByRole('button', { name: /Login/i });
    expect(loginButton).toBeInTheDocument();
  });

  test('Start Learning button is not rendered initially', () => {
    render(<Skills skills={skills} />);
    const startLearningButton = screen.queryByRole('button', { name: /Start Learning/i });
    expect(startLearningButton).not.toBeInTheDocument();
  });
});
