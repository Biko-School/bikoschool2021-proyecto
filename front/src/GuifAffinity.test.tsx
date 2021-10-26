import { render, screen } from '@testing-library/react';
import GuifAffinity from './GuifAffinity';

test('renders learn react link', () => {
  render(<GuifAffinity />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
