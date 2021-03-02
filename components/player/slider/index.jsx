import PropTypes from 'prop-types';
import { memo, useCallback } from 'react';

import { SLIDER_STEP } from '../constants';
import { InputStyled, SliderStyled, ThumbStyled } from './styles';

const Slider = ({ onChange, percent, ...props }) => {
    const handleChange = useCallback(({ target }) => {
        const { value: nextPercent } = target;

        onChange((parseFloat(nextPercent) + SLIDER_STEP).toFixed(1));
    }, []);

    return (
        <SliderStyled percent={percent}>
            <ThumbStyled />
            <InputStyled
                type="range"
                step={SLIDER_STEP}
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

export default memo(Slider);
