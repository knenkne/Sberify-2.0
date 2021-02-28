import PropTypes from 'prop-types';

import { ButtonStyled } from './styles';

const Button = ({ children, size = 'md', filled }) => (
    <ButtonStyled size={size} filled={filled}>
        {children}
    </ButtonStyled>
);

Button.propTypes = {
    children: PropTypes.node,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    filled: PropTypes.bool
};

export default Button;
