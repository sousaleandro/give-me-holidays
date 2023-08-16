import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

describe('To be true', () => {
  it('should be true', () => {
    expect(true).toBe(true);
  });
});

describe('Header tests', () => {
  it('Verify if the header is rendering', () => {
    render(<Header />);

    const header = screen.getByRole('heading', { name: /give me holidays/i })
    expect(header).toBeInTheDocument();
  });
});
