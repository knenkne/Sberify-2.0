import { HeadlineStyled } from "./styles"

const Headline = ({ title }) => (
  <HeadlineStyled title={title}>
    <span>{title}</span>
  </HeadlineStyled>
)

export default Headline
