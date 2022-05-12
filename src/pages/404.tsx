import { useEffect,FC } from "react";

import Head from "next/head";
import { useRouter } from "next/router";

import styles from "src/styles/404.module.scss"

const Error:FC = () => {

  
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
