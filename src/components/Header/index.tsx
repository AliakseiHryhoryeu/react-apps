import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Icon, Stack } from '@mui/material';
import Image from "next/image";
import { useRouter } from 'next/router'
import styles from 'src/styles/Header.module.scss'

import Link from 'next/link'


export const Header = () => {

  const navigation = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "Sliders", path: "/sliders" },
    { id: 3, title: "Mini-games", path: "/games" },
  ]

  const { pathname } = useRouter()

  return (
    <header >
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>


          <Link key={Date.now() + 'logo'} href="/" passHref >
            <Icon sx={{ pr: 1, cursor: 'pointer' }}>
              <Image
                src="/static/logo-white.svg"
                alt="logo"
                width={24}
                height={24}
              />
            </Icon>
          </Link>

          <Link key={Date.now() + 'title'} href="/" passHref >
            <Typography variant="h6" color="inherit" component="div" sx={{ cursor: 'pointer' }}>
              React-apps
            </Typography>
          </Link>


          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexGrow: 1
            }}
          >
            <Stack
              direction="row"
              spacing={7}
            >

              {navigation.map(({ id, title, path }) => (
                <Link key={id} href={path} passHref>
                  <Typography variant="h6" color="inherit" component="div"
                    className={pathname === path ? styles.active : null}
                    sx={{ cursor: 'pointer' }}>
                    {title}
                  </Typography>
                </Link>

              ))}
            </Stack>

          </Box>
        </Toolbar>

      </AppBar>
    </header>
  )
}


  // <Link href={`/posts/${id}`}>{title}</Link>

//                 ))}
