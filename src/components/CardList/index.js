import Link from "next/link";

const CardList = ({title,images,id}) => {
  return (
      <Link href={`${id}`} className="cursor-pointer">
        <img
          src={`${process.env.NEXT_PUBLIC_POSTER_API}${images}`} //${images}
          alt="..."
          width={350}
          height={350}
          className="w-full max-h-64 object-cover"
        />
        <h3 className="font-bold md:text-xl text-md p-4">{title}</h3>
      </Link>
  );
};

export default CardList;
