'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Container, Flex, Button, Avatar, Separator } from '@radix-ui/themes'
import { useUser, SignedIn, SignedOut, SignOutButton } from '@clerk/nextjs'

const Navbar = (): React.ReactNode | null => {
  const { isLoaded, isSignedIn, user } = useUser()

  if (!isLoaded) return null

  return (
    <nav
      className="fixed top-0 left-0 z-50 w-full shadow-md"
      style={{ backgroundColor: 'var(--gray-1)' }}
    >
      <Container>
        <Flex
          className="mx-auto"
          align="center"
          justify="between"
          px="4"
          py="3"
        >
          <Link href="/">
            <Image
              src="/globe.svg"
              alt="Logo"
              width={60}
              height={60}
              className="cursor-pointer"
            />
          </Link>

          <Flex gap="5" align="center">
            <SignedIn>
              <Link href="/">
                <Button variant="ghost">ToDo</Button>
              </Link>

              {user?.imageUrl ? (
                <Link href="/profile">
                  <Avatar
                    src={user.imageUrl}
                    fallback="U"
                    size="2"
                    radius="full"
                  />
                </Link>
              ) : (
                <Avatar fallback="?" size="2" radius="full" />
              )}

              <SignOutButton>
                <Button variant="solid">Sign Out</Button>
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
                <Button variant="solid">Sign Up</Button>
              </Link>
            </SignedOut>
          </Flex>
        </Flex>
      </Container>
      <Separator orientation="horizontal" size="4" />
    </nav>
  )
}

export default Navbar
