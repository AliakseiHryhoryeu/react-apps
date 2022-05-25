import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Box, Typography } from '@mui/material'

function Sliders() {
	const navigation = [
		{
			id: 1,
			title: 'Slider',
			image: '/static/sliders/slider-preview.png',
			path: '/sliders/slider',
		},
		{
			id: 2,
			title: 'Double Slider',
			image: '/static/sliders/double-slider-preview.png',
			path: '/sliders/double-slider',
		},
		{
			id: 3,
			title: 'Card Slider',
			image: '/static/sliders/card-slider-preview.png',
			path: '/sliders/card-slider',
		},
	]

	return (
		<>
			<Head>
				<title>Sliders</title>
			</Head>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					backgroundColor: '#1F1F1F',
					height: '100%',
				}}
			>
				{navigation.map(({ id, title, image, path }) => (
					<Link key={id} href={path} passHref>
						<Box
							sx={{
								background: `center / cover  no-repeat url(${image})`,
								display: 'flex',
								height: '31%',
								justifyContent: 'center',
								alignItems: 'center',
								cursor: 'pointer',
							}}
						>
							<Typography
								variant='h5'
								color='inherit'
								component='div'
								sx={{
									backgroundColor: 'rgba(0, 0, 0, 0.5)',
									color: '#FFF',
									fontWeight: 300,
									padding: '0.75rem 1.5rem',
								}}
							>
								{title}
							</Typography>
						</Box>
					</Link>
				))}
			</Box>
		</>
	)
}

export default Sliders
