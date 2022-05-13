import { FC } from "react"
import Head from "next/head"
import Image from "next/image";
import { Box, Typography } from "@mui/material";

const Home: FC = () => {

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
        <Box
          sx={{
            background: 'center / auto  no-repeat url(/static/home/mini-games-bg.webp)',
            width: '48%',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            cursor:'pointer'
          }}
        >
          <Typography variant="h5" color="inherit" component="div"
            sx={{
              backgroundColor: 'rgba(0, 0, 0, 0.5)', 
              color: '#FFF',
              fontWeight: 300,
              padding:'0.75rem 1.5rem'
            }}>
            mini-games
          </Typography>
        </Box>

        <Box
          sx={{
            background: 'center  no-repeat url(/static/home/sliders-bg.jpg)',
            width: '48%',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            cursor:'pointer'
          }}
        >
          <Typography variant="h5" color="inherit" component="div"
            sx={{
              backgroundColor: 'rgba(0, 0, 0, 0.5)', 
              color: '#FFF',
              fontWeight: 300,
              padding:'0.75rem 1.5rem'
            }}>
            sliders
          </Typography>
        </Box>

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