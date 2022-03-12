import Head from 'next/head'
import YoutubeVideo from '../components/youtube'

export default function Home() {
  return (
    <div>
      <Head>
        <title>ba-ka x &#12400;-&#12363;</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <YoutubeVideo playlist="PL6UeSFbYxOqJs1o2BQ8RTmgagfkxttMDb"/>
    </div>
  )
}
