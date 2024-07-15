import Link from "next/link";
import CardList from "../components/CardList";
import searchPage from "./search/[keyword]/page";
import { api_key } from "../helpers/helpers";
import Header from "@/components/CardList/header";

const page = async () => {
  
  const popularResponse = await fetch(
    `${process.env.NEXT_PUBLIC_URL_BASE}/movie/popular?language=en-US&page=1`,
    api_key
  );
  const upcomingResponse = await fetch(
    `${process.env.NEXT_PUBLIC_URL_BASE}/movie/upcoming?language=en-US&page=1`,
    api_key
  );

  const popularData = await popularResponse.json();
  const upcomingData = await upcomingResponse.json();
  const popularMovie = popularData.results;
  const upcomingMovie = upcomingData.results;

  return (
    <>
    <section>
      <Header title={'Trending Movies'} linkRef={"/trending"} linkTitle={'See All'} />
      <CardList api={popularMovie} maksData={8}/>
      <Header title={'Coming Soon'}/>
      <CardList api={upcomingMovie} maksData={8} />
    </section>
    </>
  );
};

export default page;
