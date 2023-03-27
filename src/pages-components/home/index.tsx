import Head from 'next/head'
import {HomeProps} from "@/pages";
import {HomePageStyles} from "@/pages-components/home/style";

export default function Home(props: HomeProps) {
  return (
    <HomePageStyles>
      <Head>
        <title>React Search Component</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="header">header</div>
      <div className="cities-list">
        <ul>
          {
            props.cities.map(city => <li key={city}>{city}</li>)
          }
        </ul>
      </div>
    </HomePageStyles>
  )
}
