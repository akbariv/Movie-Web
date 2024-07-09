import Link from "next/link"
import InputSearch from "./InputSearch"

const NavBar = ()=> {
  return (
    <header className="bg-red-950">
        <div className="flex md:flex-row flex-col justify-between items-center p-4 gap-2">
            <Link href="/" className="text-red-200 font-bold text-2xl">Movie List</Link>
            <InputSearch/>
        </div>
    </header>
  )
}

export default NavBar