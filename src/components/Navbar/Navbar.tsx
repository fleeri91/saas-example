'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { useUser, SignedIn, SignedOut, SignOutButton } from '@clerk/nextjs'
import Container from '@/components/Container'

const Navbar = (): React.ReactNode | null => {
  const { isLoaded, isSignedIn, user } = useUser()

  if (!isLoaded) return null

  return (
    <nav className="bg-background sticky top-0 left-0 z-50 w-full shadow-md">
      <Container>
        <div className="flex justify-between px-2 py-4">
          <Link href="/">
            <Image
              src="/globe.svg"
              alt="Logo"
              width={60}
              height={60}
              className="cursor-pointer"
            />
          </Link>

          <div className="flex items-center gap-4">
            <SignedIn>
              <Link href="/">
                <Button variant="ghost">ToDo</Button>
              </Link>

              {user?.imageUrl ? (
                <Link href="/profile">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                  </Avatar>
                </Link>
              ) : (
                <AvatarFallback>CN</AvatarFallback>
              )}

              <SignOutButton>
                <Button>Sign Out</Button>
              </SignOutButton>
            </SignedIn>

            <SignedOut>
              <Link href="/">
                <Button variant="ghost">Home</Button>
              </Link>

              <Link href={isSignedIn ? '/subscribe' : '/sign-up'}>
                <Button variant="ghost">Subscribe</Button>
              </Link>

              <Link href="/sign-up">
                <Button>Sign Up</Button>
              </Link>
            </SignedOut>
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default Navbar
