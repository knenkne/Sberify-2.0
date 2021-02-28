import PropTypes from 'prop-types';

import { HeadlineStyled } from './styles';

const Headline = ({ title }) => (
    <HeadlineStyled title={title}>
        <span>{title}</span>
    </HeadlineStyled>
);

Headline.propTypes = {
    title: PropTypes.string
};

export default Headline;
