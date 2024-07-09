import Link from "next/link";

const Header = ({ title, linkRef, linkTitle }) => {
  return (
    <div className="flex justify-between items-center p-4">
      <h1 className="text-3xl font-bold">{title}</h1>
      {linkRef && linkTitle ? (
        <Link
          href={linkRef}
          className="text-red-700 font-bold text-sm underline"
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};
export default Header;
