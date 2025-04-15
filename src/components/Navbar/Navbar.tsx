import Link from 'next/link'
import Image from 'next/image'
import { useUser, SignedIn, SignedOut, SignOutButton } from '@clerk/nextjs'

const Navbar = () => {
  const { isLoaded, isSignedIn, user } = useUser()

  if (!isLoaded) {
    return null
  }

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
          <SignedIn>
            <Link
              href="/mealplan"
              className="text-gray-700 transition-colors hover:text-emerald-500"
            >
              Mealplan
            </Link>
            {user?.imageUrl ? (
              <Link href="/profile">
                <Image
                  src={user.imageUrl}
                  alt="Profile Picture"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </Link>
            ) : (
              <div className="h-10 w-10 rounded-full bg-gray-300"></div>
            )}
            <SignOutButton>
              <button className="ml-4 rounded bg-emerald-500 px-4 py-2 text-white transition hover:bg-emerald-600">
                Sign Out
              </button>
            </SignOutButton>
          </SignedIn>

          <SignedOut>
            <Link
              href="/"
              className="text-gray-700 transition-colors hover:text-emerald-500"
            >
              Home
            </Link>
            <Link
              href={isSignedIn ? '/subscribe' : '/sign-up'}
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
          </SignedOut>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
