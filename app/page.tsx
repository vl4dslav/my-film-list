import Navbar from "./components/Navbar";
import { NavbarItemParam } from "./components/NavbarItem";
import Result from "./components/Result";
const apiKey = process.env.API_KEY;

export interface info {
  rank: number;
  title: string;
  rating: number;
  year: number;
  image: string;
  description: string;
  trailer: string;
  genre: string[];
  director: string[];
  id: number;
}

export async function getMovieList(): Promise<info[]> {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": apiKey || "",
      "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
    },
    next: { revalidate: 3000000 },
  };

  return await fetch("https://imdb-top-100-movies.p.rapidapi.com/", options)
    .then((res) => {
      if (!res.ok) throw new Error("Faild to fetch data");
      return res.json();
    })
    .then((arr: any[]) =>
      arr.map((x, index) => {
        x.id = index + 1;
        return x;
      })
    );
}

export default async function Home({
  searchParams,
}: {
  searchParams: NavbarItemParam;
}) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": apiKey || "",
      "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
    },
    next: { revalidate: 3000000 },
  };

  const data: info[] = await getMovieList();

  return (
    <div>
      <Navbar />
      <Result cardsData={data} />
    </div>
  );
}
