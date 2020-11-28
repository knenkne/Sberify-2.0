import Layout from "../components/layout"
import Wrapper from "../components/wrapper"
import Headline from "../components/headline"
import Button from "../components/button"
import Paragraph from "../components/paragraph"

const titles = ["Explore.", "Listen.", "Share."]

const Home = () => (
  <Layout title="Home">
    <Wrapper>
      {titles.map((title) => (
        <Headline key={title} title={title} />
      ))}
      <Button filled>Start Exploring</Button>
      <Button>Get a Demo</Button>
      <Paragraph>
        Sberify combines the best music experience with an obsessive focus on
        things you like.
        <br />
        It contains a lot of artists, albums, songs, lyrics & even more...
      </Paragraph>
    </Wrapper>
  </Layout>
)

export default Home
