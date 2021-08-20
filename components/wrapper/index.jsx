import PropTypes from 'prop-types';

import { WrapperStyled } from './styles';

const Wrapper = ({ children, shadeless }) => (
    <WrapperStyled shadeless={shadeless}>{children}</WrapperStyled>
);

export default Wrapper;
