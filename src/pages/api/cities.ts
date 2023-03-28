import {NextApiRequest, NextApiResponse} from "next";

const cities: string[] =
  [
    'London', 'Manchester', 'Birmingham', 'Glasgow', 'Liverpool',
    'Bristol', 'Leeds', 'Newcastle', 'Nottingham', 'Sheffield',
    'Brighton', 'Cardiff', 'Edinburgh', 'Southampton', 'Portsmouth',
    'Belfast', 'Dublin', 'Oxford', 'Cambridge', 'Aberdeen'
  ];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {name = ''} = req.query;

  const filteredCities = cities.filter(city => city.toLowerCase().includes(name.toString().toLowerCase()));

  res.status(200).json(filteredCities);
}