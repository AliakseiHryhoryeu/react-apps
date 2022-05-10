import { FC } from "react";
import { useEffect } from "react";

import Head from "next/head";
import { useRouter } from "next/router";

import styles from "common/styles/404.module.scss"

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
        <h1> page 404</h1>

      </div>
    </div>
  )
}

export default Error;
