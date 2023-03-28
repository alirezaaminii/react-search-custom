import Head from 'next/head'
import {HomeProps} from "@/pages";
import {HomePageStyles} from "@/pages-components/home/style";
import ListItem from "@/components/item";
import {useState} from "react";
import Search from "@/components/search";
import {useRouter} from "next/router";

export default function Home(props: HomeProps) {
  const router = useRouter();
  const [selectedItem, setSelectedItem] = useState<string>('');

  const handleSelectItem = (item: string) => {
    setSelectedItem(item);
  }

  const handleChangeSearchedItem = (item: string) => {
    router.push({
      pathname: router.pathname,
      query: {
        name: item,
      }
    });
  }
  return (
    <HomePageStyles>
      <Head>
        <title>React Search Component</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <div className="header">
        <Search
          placeholder="Search in"
          label="UK"
          onSubmit={handleChangeSearchedItem}
          initialValue={router.query.name?.toString() ?? ''}
        />
      </div>
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
