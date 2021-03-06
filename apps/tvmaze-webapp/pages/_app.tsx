import { AppProps } from 'next/app'
import Head from 'next/head'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import { CssBaseline } from '@mui/material'
import TopAppBar from '../components/TopAppBar/TopAppBar'
import './styles.css'

export default function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>TvMaze WebApp, by Yago López</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="description" content="Crypto currencies comparator" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📺</text></svg>"
        />
      </Head>
      <CssBaseline />
      <TopAppBar />
      <QueryClientProvider client={new QueryClient()}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </QueryClientProvider>
    </>
  )
}
