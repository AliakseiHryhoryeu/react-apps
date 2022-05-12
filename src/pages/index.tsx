import { FC } from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import { Image } from "@mui/icons-material"


const Home:FC = () => {
  const router = useRouter()

  return (
    <div >
      <Head>
        <title>Home</title>
      </Head>
      <h1
      onClick={()=> console.log(router)}
      >index page</h1>
      <img src='/static/slider/cat-1.jpg' />
    </div>

  )
}

export default Home