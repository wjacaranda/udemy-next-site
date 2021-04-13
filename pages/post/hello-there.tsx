import Navigation from '@components/navigation'
import Head from 'next/head';
import Image from 'next/image';

const Hello = () => (
  <>
    <Head>
      <title>Hello there :: My Blog</title>
      <meta property="og:title" content="Hello there :: My Blog" />
    </Head>
    <article>
      <Navigation />
      <h1>Hello There!</h1>
        <Image 
          src='/post/hello-there/trabGeoBella.jpg'
          width={648}
          height={427}
        />
        <p>Photo by <a href="">Trabalho Isabella</a></p>
    </article>
  </>
)

export default Hello