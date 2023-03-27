import Head from 'next/head'
import {HomeProps} from "@/pages";

export default function Home(props: HomeProps) {
  console.log(props);
  return (
    <>
      <Head>
        <title>React Search Component</title>
        <meta name="description" content="React Search Component" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      test
    </>
  )
}
