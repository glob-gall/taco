import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItemProps = {
  href: string
  text: string
  active: boolean
}
function NavItem({ href, text, active }: NavItemProps) {
  return (
    <Link
      href={href}
      className={
        `text-zinc-100 text-lg rounded py-1 px-2 duration-200 hover:text-zinc-300 hover:bg-zinc-800 ${active && 'bg-zinc-800'}`
      }
    >
      {text}
    </Link>
  )
}

export function Navbar() {
  const pathname = usePathname();
  console.log({ pathname });

  return (
    <div className="flex gap-2">
      <NavItem
        href="/"
        text="Home"
        active={pathname === '/'}
      />
      <NavItem
        href="/table"
        text="Tabela"
        active={pathname === '/table'}
      />
    </div>
  )
}