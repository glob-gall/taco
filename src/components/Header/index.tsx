import Link from "next/link";
import { Navbar } from "../Navbar";

export function Header() {
  return (
    <div className="flex flex-row items-center mb-2 justify-between" >
      <Link href="/" >
        <h1 className="text-zinc-200 text-2xl font-bold duration-200 py-1 px-2 rounded hover:bg-zinc-800">
          TABELA TACO
        </h1>
      </Link>
      <div>
        <Navbar
          items={[
            {
              path: "/",
              text: "Home"
            }
          ]}
        />
      </div>
    </div>
  )
}