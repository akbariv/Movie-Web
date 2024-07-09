import CardList from "@/components/CardList";
import Header from "@/components/CardList/header";
import { api_key } from "@/utils/helpers";

const Page = async ({params}) => {
const responseSearch = await fetch(`${process.env.NEXT_PUBLIC_URL_BASE}/search/movie?query=${params.keyword}&include_adult=true&language=en-US&page=1`, api_key)
const titleSearch = decodeURIComponent(params.keyword);

const dataSearch = await responseSearch.json();
const results = dataSearch.results;
  return(
  <>
     <section>
      <Header title={`Search For ${titleSearch} ..`}/>
      <CardList api={results} />
    </section>
  </>
  )
};

export default Page;
