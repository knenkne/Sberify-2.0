import { memo } from 'react';

/* eslint-disable react/prop-types */
const SLIDER_STEP = 0.1;

const Slider = memo(({ value = 0, onChange, ...rest }) => {
    const handleChange = ({ target }) => {
        const { value: nextValue } = target;

        onChange(parseFloat(nextValue).toFixed(1));
    };

    return (
        <div className="relative w-full h-0.5 bg-white">
            <div
                className="absolute w-2 h-2 bg-white rounded-full top-2/4 -translate-y-2/4 -ml-1 z-10 pointer-events-none"
                style={{
                    left: `${value}%`
                }}
            />
            <div
                className="absolute w-full h-full bg-gradient-to-r from-brand-primary to-brand-secondary"
                style={{
                    width: `${value}%`
                }}
            />
            <input
                className="slider-thumb absolute block bg-transparent h-2 w-full top-2/4 -translate-y-2/4 cursor-pointer appearance-none"
                type="range"
                value={value}
                step={SLIDER_STEP}
                onChange={handleChange}
                {...rest}
            />
        </div>
    );
});

Slider.displayName = 'Slider';

export { Slider };
