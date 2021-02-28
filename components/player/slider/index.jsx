import PropTypes from 'prop-types';
import { useCallback } from 'react';

import { InputStyled, SliderStyled, ThumbStyled } from './styles';

const STEP = 0.1;

const Slider = ({ onChange, percent, ...props }) => {
    const handleChange = useCallback(({ target }) => {
        const { value: nextPercent } = target;

        onChange((parseFloat(nextPercent) + STEP).toFixed(1));
    }, []);

    return (
        <SliderStyled percent={percent}>
            <ThumbStyled />
            <InputStyled
                type="range"
                step="0.1"
                value={percent}
                onChange={handleChange}
                {...props}
            />
        </SliderStyled>
    );
};

Slider.propTypes = {
    onChange: PropTypes.func.isRequired,
    percent: PropTypes.string
};

export default Slider;
