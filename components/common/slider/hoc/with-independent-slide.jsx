/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { useCallback, useEffect, useState } from 'react';

const withIndependentSlide = (WrappedSlider) => {
    const WithIndependentSlide = ({ value: outerValue, onChange }) => {
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
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [isSliding]);

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
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
            />
        );
    };

    WithIndependentSlide.displayName = `WithIndependentSlide(${WrappedSlider.name})`;
    WithIndependentSlide.propTypes = {
        onChange: PropTypes.func.isRequired,
        value: PropTypes.string
    };

    return WithIndependentSlide;
};

export { withIndependentSlide };
