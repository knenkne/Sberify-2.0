import PropTypes from 'prop-types';

import { ParagraphStyled } from './styles';

const Paragraph = ({ children }) => <ParagraphStyled>{children}</ParagraphStyled>;

Paragraph.propTypes = {
    children: PropTypes.node
};
export default Paragraph;
