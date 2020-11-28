import Layout from "../components/layout"
import Wrapper from "../components/wrapper"
import Headline from "../components/headline"
import Button from "../components/button"

const titles = ["Explore.", "Listen.", "Share."]

const Home = () => (
  <Layout title="Home">
    <Wrapper>
      {titles.map((title) => (
        <Headline key={title} title={title} />
      ))}
      <Button filled>Start Exploring</Button>
      <Button>Get a Demo</Button>
    </Wrapper>
  </Layout>
)

export default Home
