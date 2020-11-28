import Layout from "../components/layout"
import Wrapper from "../components/wrapper"
import Headline from "../components/headline"

const titles = ["Explore.", "Listen.", "Share."]

const Home = () => (
  <Layout title="Home">
    <Wrapper>
      {titles.map((title) => (
        <Headline key={title} title={title} />
      ))}
    </Wrapper>
  </Layout>
)

export default Home
