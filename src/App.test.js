import { render, screen } from '@testing-library/react';
import Roombooking from './Roombook';

test('renders learn react link', () => {
  render(<Roombooking />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
