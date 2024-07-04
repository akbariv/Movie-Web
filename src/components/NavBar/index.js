import Link from "next/link"

const NavBar = ()=> {
  return (
    <header className="bg-red-950">
        <div className="flex md:flex-row flex-col justify-between items-center p-4 gap-2">
            <Link href="/" className="text-red-200 font-bold text-2xl">Movie List</Link>
            <input placeholder="Search Movie..." className=""/>
        </div>
    </header>
  )
}

export default NavBar