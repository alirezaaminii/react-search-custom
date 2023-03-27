import Head from 'next/head'
import {HomeProps} from "@/pages";
import {HomePageStyles} from "@/pages-components/home/style";
import ListItem from "@/components/item";
import {useState} from "react";

export default function Home(props: HomeProps) {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleSelectItem = (item: string) => {
    setSelectedItem(item);
  }
  return (
    <HomePageStyles>
      <Head>
        <title>React Search Component</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <div className="header" tabIndex={0}>{selectedItem}</div>
      <div className="list">
        {
          props.cities.length === 0
            ? <div className="not-found">Not found</div>
            : <ul>
              {
                props.cities.map(city => (
                  <ListItem
                    onSelect={() => handleSelectItem(city)}
                    key={city}
                    selected={selectedItem === city}
                    name={city}
                  />
                ))
              }
            </ul>
        }

      </div>
    </HomePageStyles>
  )
}
