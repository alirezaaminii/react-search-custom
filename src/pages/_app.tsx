import type {AppProps} from 'next/app'
import GlobalStyles from "@/styles/global-styles";
import {Layout} from "@/layout";

export default function App({Component, pageProps}: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
