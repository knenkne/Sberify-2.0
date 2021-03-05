import PropTypes from 'prop-types';

import { WrapperStyled } from './styles';

const Wrapper = ({ children }) => <WrapperStyled>{children}</WrapperStyled>;

Wrapper.propTypes = {
    children: PropTypes.node
};

export default Wrapper;
