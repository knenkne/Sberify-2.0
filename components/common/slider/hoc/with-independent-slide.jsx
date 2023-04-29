/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { useCallback, useEffect, useState } from 'react';

import { noop } from '../../../../shared/constants';

const withIndependentSlide = (WrappedSlider) => {
    const WithIndependentSlide = ({ value: outerValue, onChange, onInput = noop }) => {
        const [innerValue, setInnerValue] = useState(0);
        const [isSliding, setIsSliding] = useState(false);

        useEffect(() => {
            // Let the outer value lead if there is no sliding
            if (!isSliding && innerValue !== outerValue) {
                setInnerValue(outerValue);
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [outerValue]);

        useEffect(() => {
            // Set the new outer value when rewinding has ended
            if (!isSliding && innerValue !== outerValue) {
                onChange(innerValue);
                onInput(innerValue);
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [isSliding, innerValue]);

        const handleChange = useCallback((value) => {
            setInnerValue(value);
        }, []);

        const handleMouseDown = useCallback(() => {
            setIsSliding(true);
        }, []);

        const handleMouseUp = useCallback(() => {
            setIsSliding(false);
        }, []);

        return (
            <WrappedSlider
                value={innerValue}
                onChange={handleChange}
                onInput={handleChange}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
            />
        );
    };

    WithIndependentSlide.displayName = `WithIndependentSlide(${WrappedSlider.displayName})`;
    WithIndependentSlide.propTypes = {
        onChange: PropTypes.func.isRequired,
        onInput: PropTypes.func,
        value: PropTypes.string
    };

    return WithIndependentSlide;
};

export { withIndependentSlide };
