import React from 'react'
import Head from "next/head"
import Link from 'next/link'
import { Box, Typography } from "@mui/material";

function Games() {
    const navigation = [
        { id: 1, title: "Tasks-board", image: '/static/home/sliders-bg.jpg', path: "/games/dragdrop" },
        { id: 2, title: "Aim Game", image: '/static/home/mini-games-bg.webp', path: "/games/aimgame" },
        { id: 3, title: "Cursor Board", image: '/static/home/mini-games-bg.webp', path: "/games/cursorboard" },
    ]

    return (
        <>
            <Head>
                <title>Mini-games</title>
            </Head>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
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
                                display: 'flex',
                                height: '30%',
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

export default Games