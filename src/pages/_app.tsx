import { AppProps } from 'next/app'
import { Layout } from 'components/'
import Head from 'next/head'

import 'common/styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (

    <Layout >
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </Layout>

  )
}

export default MyApp
