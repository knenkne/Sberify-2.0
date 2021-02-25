import { useRouter } from "next/router"

// import Layout from "../../components/layout"
import Player from "../../components/player"

const Artist = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    // <Layout>
      <Player
        artist="Enter Shikari"
        name="{ The Dreamer’s Hotel }"
        image="https://images.genius.com/45816096f1a4a1403d8d1ea3bb0aaea0.1000x1000x1.jpg"
        src="https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview113/v4/d2/31/ef/d231ef51-40b6-4780-2835-b1063239d752/mzaf_17341567205560380620.plus.aac.p.m4a"
      />
    // </Layout>
  )
}

export default Artist
