import Layout from "../layout"
import { BannerStyled, HeadlineStyled } from "./styles"

const headlines = ["Explore.", "Listen.", "Share."]

const Home = () => {
  return (
    <Layout title={"Home"}>
      <BannerStyled>
        {headlines.map((title) => (
          <HeadlineStyled key={title} title={title}>
            <span>{title}</span>
          </HeadlineStyled>
        ))}
      </BannerStyled>
    </Layout>
  )
}

export default Home
