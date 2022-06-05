import '../styles/globals.css'
import type { AppProps } from 'next/app'
import BasicLayout from '../_layout/Basic'

function MyApp({ Component, pageProps }: AppProps) {
  return<>
      <BasicLayout>
        <Component {...pageProps} />
      </BasicLayout>
    </>
}

export default MyApp
