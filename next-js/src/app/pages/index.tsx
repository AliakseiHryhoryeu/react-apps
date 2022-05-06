import { FC } from "react"
import { GetStaticProps } from "next"
import Head from "next/head"
import Heading from "../components/Heading"
import styles from '../styles/Home.module.scss'
import Socials from '../components/Socials'

import { socialsType } from "../types"

export const getStaticProps: GetStaticProps = async () => {

  try {
    const response = await fetch(`${process.env.API_HOST}/socials`)
    const data = await response.json()

    if (!data) {
      return {
        notFound: true
      }
    }
    return {
      props: { socials: data }
    }
  } catch {
    return {
      props: { socials: null }
    }

  }

}
type homeTypeProps = {
  socials: [socialsType]
}

const Home: FC<homeTypeProps> = ({ socials }) => (

  <div className={styles.wrapper}>
    <Head>
      <title>Home</title>
    </Head>
    <Heading text="Home page" />
    <Socials socials={socials} />
  </div>

)

export default Home
