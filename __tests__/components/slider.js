import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import { Slider } from '../../components/common/slider';

const value = '65.5';

describe('Slider', () => {
    it('initializes', () => {
        expect(Slider).toBeDefined();
    });

    it('renders with correct value', () => {
        const { rerender } = render(<Slider value={value} />);

        expect(screen.getByRole('slider').value).toBe(value);

        // Values overflow
        rerender(<Slider value={500} />);
        expect(screen.getByRole('slider').value).toBe('100');

        rerender(<Slider value={-500} />);
        expect(screen.getByRole('slider').value).toBe('0');
    });

    it('triggers onChange with correct value', () => {
        const handleChange = jest.fn(() => value);
        render(<Slider onChange={handleChange} />);
        const slider = screen.getByRole('slider');

        fireEvent.change(slider, { target: { value } });

        expect(handleChange).toBeCalledTimes(1);
        expect(handleChange).toBeCalledWith(value);
    });
});
