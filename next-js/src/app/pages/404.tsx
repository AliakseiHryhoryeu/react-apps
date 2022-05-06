import { FC } from "react";
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Heading from "../components/Heading";
import styles from "../styles/404.module.scss"

const Error:FC = () => {
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      router.push('/')

    }, 4000)
  }, [router])
  
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Error</title>
      </Head>
      <div>
        <Heading text="404" />
        <Heading tag="h2" text="Something is going wrong..." />

      </div>
    </div>
  )
}

export default Error;
