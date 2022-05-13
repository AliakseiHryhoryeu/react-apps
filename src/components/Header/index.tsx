import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Icon, Stack } from '@mui/material';
import Image from "next/image";

export const Header = () => {

  return (
    <header >
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Icon sx={{ mr: 1 }}>
            <Image
              src="/static/logo-white.svg"
              alt="logo"
              width={24}
              height={24}
            />
          </Icon>
          <Typography variant="h6" color="inherit" component="div">
            React-apps
          </Typography>
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
              <Typography variant="h6" color="inherit" component="div"
                sx={{ cursor: 'pointer', borderBottom: '1px solid #FFFFFF' }}>
                Home
              </Typography>
              <Typography variant="h6" color="inherit" component="div"
                sx={{ cursor: 'pointer' }}>
                Mini-games
              </Typography>
              <Typography variant="h6" color="inherit" component="div"
                sx={{ cursor: 'pointer' }}>
                Sliders
              </Typography>
            </Stack>

          </Box>
        </Toolbar>

      </AppBar>
    </header>
  );
}

