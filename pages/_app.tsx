import type { AppProps } from 'next/app';
import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import createEmotionCache from '../createEmotionCache';
// import { Toaster } from 'react-hot-toast';

const clientSideEmotionCache = createEmotionCache();

import theme from 'styles/theme';

interface Props extends AppProps {
	emotionCache: any;
	clientSideEmotionCache: any;
}

function MyApp({ Component, emotionCache = clientSideEmotionCache, pageProps }: Props) {
//   return <Component {...pageProps} />
  	return (
		<>
			{/* <Toaster /> */}
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#168F88" />
				<meta name="description" content="" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-status-bar-style" content="#168F88" />
			</Head>
			<CacheProvider value={emotionCache}>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<Component {...pageProps} />
				</ThemeProvider>
			</CacheProvider>
		</>
  	);
}

export default MyApp;