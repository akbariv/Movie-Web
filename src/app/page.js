import Link from "next/link";
import CardList from "../components/CardList";
import Search from "../components/Search";
import { api_key } from "../utils/helpers";

const Home = async () => {
  
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL_BASE}/movie/popular?language=en-US&page=1`,
    api_key
  );
  const movieData = await response.json();
  const rawData = movieData.results;
  // console.log(movieData, '===Responses');

  return (
    <div>
      <div className="flex justify-between items-center p-4">
      <h1 className="text-3xl font-bold">Trending Movies</h1>
      <Link href="/popular" className="text-red-700 font-bold text-sm underline">See All</Link>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
        {rawData.slice(0, 8).map((movie) => (
          <div key={movie.id} className="shadow-xl">
            <CardList title={movie.title} images={movie.poster_path} id={movie.id}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
