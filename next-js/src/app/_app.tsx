import { AppProps } from 'next/app'
import '../styles/globals.scss'
import Layout from 'app/components/Layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }:AppProps) {
  return (

    <Layout >
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet" />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </Layout>

  )
}

export default MyApp
