import CardList from "@/components/CardList";
import Header from "@/components/CardList/header";
import { api_key, getSearchMovie } from "@/helpers/helpers";
// import { api_key } from "@/helpers/helpers";

const Page = async ({params}) => {
const titleSearch = decodeURIComponent(params.keyword);
const dataSearch = await getSearchMovie(params.keyword);

  return(
  <>
     <section>
      <Header title={`Search For ${titleSearch} ..`}/>
      <CardList api={dataSearch} />
    </section>
  </>
  )
};

export default Page;
