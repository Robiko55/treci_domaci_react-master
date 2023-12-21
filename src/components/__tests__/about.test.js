import {render, screen, cleanup } from '@testing-library/react';
import About from '../About';

test('treba da tenderuje about komponentu', () => {
    render(<About/>);
    const aboutElement = screen.getByTestId('about-1');
    expect(aboutElement).toBeInTheDocument();
})