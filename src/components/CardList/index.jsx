import Link from "next/link";

const CardList = ({ api }) => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
      {api.slice(0,8).map((movie) => {
        return (    
      <Link href={`${movie.id}`} className="cursor-pointer  text-color-white hover:text-color-accent transition-all">
        <img
          src={`${process.env.NEXT_PUBLIC_POSTER_API}${movie.poster_path}`} //${images}
          alt="..."
          width={350}
          height={350}
          className="w-full max-h-64 object-cover"
        />
        <h3 className="font-bold md:text-xl text-md p-4">{movie.title}</h3>
      </Link>
        )
      })}
    </div>
  );
};

export default CardList;
