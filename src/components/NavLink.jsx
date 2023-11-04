import Link from 'next/link'

export function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="font-regular inline-block rounded-lg px-2 py-1 text-base text-white transition duration-300 ease-in-out hover:text-rose-200"
    >
      {children}
    </Link>
  )
}
