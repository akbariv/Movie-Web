import Link from "next/link";

const Header = ({ title, linkRef, linkTitle }) => {
  return (
    <div className="flex justify-between items-center p-4">
      <h1 className="text-3xl font-bold text-color-white">{title}</h1>
      {linkRef && linkTitle ? (
        <Link
          href={linkRef}
          className="md:text-xl text-sm underline hover:text-color-accent transition-all text-color-white"
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};
export default Header;
