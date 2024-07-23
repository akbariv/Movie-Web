import CardList from "../components/CardList";
import { getPopularMovies, getUpcomingMovies } from "../helpers/helpers";
import Header from "@/components/CardList/header";

const page = async () => {

  const popularMovie = await getPopularMovies(1);
  const upcomingMovie = await getUpcomingMovies(1);


  return (
    <>
      <section>
        <Header title={'Trending Movies'} linkRef={"/trending"} linkTitle={'See All'} />
        <CardList api={popularMovie} maksData={8} />
        <Header title={'Coming Soon'} />
        <CardList api={upcomingMovie} maksData={8} />
      </section>
    </>
  );
};

export default page;
