import { AppProps } from 'next/app'
import Head from 'next/head'

import { Layout, Meta } from 'src/components/'
import 'src/styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Head>
				<Meta />
			</Head>
			<Component {...pageProps} />
		</Layout>
	)
}

export default MyApp
