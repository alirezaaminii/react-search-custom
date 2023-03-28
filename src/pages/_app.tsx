import type {AppProps} from 'next/app'
import GlobalStyles from "@/styles/global-styles";
import {Layout} from "@/layout";
import {useEffect} from "react";
import {useRouter} from "next/router";
import {useBoolean} from "@/hooks/useBoolean";
import {Loading} from "@/components/loading";

export default function App({Component, pageProps}: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useBoolean(false);

  useEffect(() => {
    const handleStart = (url: string) => {
      url !== router.pathname ? setLoading.setTrue() : setLoading.setFalse();
    };
    const handleComplete = () => setLoading.setFalse();

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router, setLoading]);
  return (
    <>
      <GlobalStyles />
      <Layout>
        {loading && <Loading />}
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
