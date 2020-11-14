import { useRouter } from 'next/router'

import { Layout } from '../../components/layout'

const Artist = () => {
  const router = useRouter()
  const { name } = router.query

  return (
    <Layout title={name}>
      <section>
        <h2>{name}</h2>
        <img src="https://via.placeholder.com/300" alt={name} />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
          nostrum labore aspernatur iste? Vel fugiat voluptatibus harum aut
          perspiciatis maxime dolore aspernatur modi. Quod vitae architecto
          dolore expedita incidunt ipsum.
        </p>
      </section>
    </Layout>
  )
}

export default Artist
