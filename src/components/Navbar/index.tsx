"use client"

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

type NavbarItem = {
  text: string
  path: string
}
type NavbarProps = {
  items: NavbarItem[]
}
export function Navbar({ items }: NavbarProps) {
  const pathname = usePathname();
  console.log({ pathname });

  return (
    <div className="flex gap-2">
      {items.map(i => (
        <NavItem
          key={i.path}
          href={i.path}
          text={i.text}
          active={pathname === i.path}
        />
      ))}
    </div>
  )
}