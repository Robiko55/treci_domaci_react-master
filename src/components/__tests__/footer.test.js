import {render, screen, cleanup } from '@testing-library/react';
import Footer from '../Footer';

test('treba da renderuje footer komponentu', () => {
    render(<Footer/>);
    const footerElement = screen.getByTestId('footer-1');
    expect(footerElement).toBeInTheDocument();
    expect(footerElement).toHaveTextContent('©');
})