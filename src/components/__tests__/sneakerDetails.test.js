import {render, screen, cleanup, getByAltText } from '@testing-library/react';
import SneakersDetails from '../SneakersDetails';

test('treba da renderuje detalje o automobilu', () => {
    render(<SneakersDetails/>);
    const detailsElement = screen.getByTestId('details-1');
    const imgElement = screen.getByTestId('carimg-1');
    expect(detailsElement).toHaveTextContent('Cena');
    expect(detailsElement).toHaveTextContent('Brend')
    expect(detailsElement).toHaveTextContent('Godina izlaska');
    expect(imgElement).toBeInTheDocument();
})