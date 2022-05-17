import { FC } from "react"
import Head from "next/head"
import Image from "next/image"
import Link from 'next/link'

import { Box, Typography } from "@mui/material";

const Home: FC = () => {
  const navigation = [
    { id: 1, title: "Mini-games", image: '/static/home/mini-games-bg.webp', path: "/games" },
    { id: 2, title: "Sliders", image: '/static/home/sliders-bg.jpg', path: "/sliders" },

  ]

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          backgroundColor: '#1F1F1F',
          height: '100%'
        }}
      >
        {navigation.map(({ id, title, image, path }) => (
          <Link key={id} href={path} passHref >
            <Box
              sx={{
                background: `center / cover  no-repeat url(${image})`,
                width: '48%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer'
              }}
            >
              <Typography variant="h5" color="inherit" component="div"
                sx={{
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  color: '#FFF',
                  fontWeight: 300,
                  padding: '0.75rem 1.5rem'
                }}>
                {title}
              </Typography>
            </Box>
          </Link>
        ))}
      </Box>

    </>

  )
}

export default Home







{/* <Image
src="/static/slider/cat-2.jpg"
alt="Picture of the author"
width={500}
height={500}
/>


<Image
src="/static/slider/cat-3.jpg"
alt="Picture of the author"
width={500}
height={500}
/> */}