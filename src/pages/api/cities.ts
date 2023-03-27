import {NextApiRequest, NextApiResponse} from "next";

const cities: string[] = [
  'New York',
  'Los Angeles',
  'Chicago',
  'Houston',
  'Philadelphia',
  'Phoenix',
  'San Antonio',
  'San Diego',
  'Dallas',
  'San Jose'
];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name = '' } = req.query;

  const filteredCities = cities.filter(city => city.toLowerCase().includes(name.toString().toLowerCase()));

  res.status(200).json(filteredCities);
}