import { useState } from 'react';

const SLIDER_STEP = 0.1;

const Slider = () => {
    const [value, setValue] = useState(0);

    const handleChange = ({ target }) => {
        const { value: nextValue } = target;

        setValue(parseFloat(nextValue).toFixed(1));
    };

    return (
        <div
            className="relative
            w-full
            h-0.5
            bg-white
        "
        >
            <div
                className="absolute w-2 h-2 bg-white rounded-full pointer-events-none top-2/4 -translate-y-2/4 -ml-1 z-10"
                style={{
                    left: `${value}%`
                }}
            />
            <div
                className="absolute
            w-full
            h-full
            left-0
            bottom-0
            bg-gradient-to-r
            from-brand-primary
            to-brand-secondary
            pointer-events-none
            "
                style={{
                    width: `${value}%`
                }}
            ></div>
            <input
                className="absolute left-0 block appearance-none bg-transparent h-2 w-full top-2/4 -translate-y-2/4 slider-thumb cursor-pointer"
                type="range"
                value={value}
                step={SLIDER_STEP}
                onChange={handleChange}
            />
        </div>
    );
};

export default Slider;
