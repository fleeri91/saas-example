import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/">
          <Image
            className="cursor-pointer text-xl font-bold text-emerald-700"
            src="/globe.svg"
            width={60}
            height={60}
            alt="Logo"
          />
        </Link>

        <div className="flex items-center space-x-6">
          <Link
            href="/"
            className="text-gray-700 transition-colors hover:text-emerald-500"
          >
            Home
          </Link>
          <Link
            href={'/sign-up'}
            className="text-gray-700 transition-colors hover:text-emerald-500"
          >
            Subscribe
          </Link>
          <Link
            href="/sign-up"
            className="rounded bg-emerald-500 px-4 py-2 text-white transition hover:bg-emerald-600"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
