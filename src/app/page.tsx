'use client'

import Link from 'next/link'

import { User, Sliders, Check } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

import Container from '@/components/Container'

const App = () => {
  return (
    <Container className="py-8 sm:py-12 lg:py-16">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground mb-12 rounded-lg p-8 text-center">
        <h1 className="mb-4 text-4xl font-bold">Personalized AI Meal Plans</h1>
        <p className="mb-6 text-xl">
          Let our AI do the planning. You focus on cooking and enjoying!
        </p>
        <Button asChild variant="secondary">
          <Link href="/sign-up">Get Started</Link>
        </Button>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="mb-12">
        <div className="mb-8 text-center">
          <h2 className="text-foreground text-3xl font-semibold">
            How It Works
          </h2>
          <p className="text-muted-foreground mt-2">
            Follow these simple steps to get your personalized meal plan
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Step 1 */}
          <Card className="flex flex-col items-center p-6 text-center">
            <div className="bg-primary text-primary-foreground mb-4 flex h-16 w-16 items-center justify-center rounded-full">
              <User className="h-8 w-8" />
            </div>
            <h3 className="text-foreground mb-2 text-xl font-medium">
              Create an Account
            </h3>
            <p className="text-muted-foreground">
              Sign up or sign in to access your personalized meal plans.
            </p>
          </Card>

          {/* Step 2 */}
          <Card className="flex flex-col items-center p-6 text-center">
            <div className="bg-primary text-primary-foreground mb-4 flex h-16 w-16 items-center justify-center rounded-full">
              <Sliders className="h-8 w-8" />
            </div>
            <h3 className="text-foreground mb-2 text-xl font-medium">
              Set Your Preferences
            </h3>
            <p className="text-muted-foreground">
              Input your dietary preferences and goals to tailor your meal
              plans.
            </p>
          </Card>

          {/* Step 3 */}
          <Card className="flex flex-col items-center p-6 text-center">
            <div className="bg-primary text-primary-foreground mb-4 flex h-16 w-16 items-center justify-center rounded-full">
              <Check className="h-8 w-8" />
            </div>
            <h3 className="text-foreground mb-2 text-xl font-medium">
              Receive Your Meal Plan
            </h3>
            <p className="text-muted-foreground">
              Get your customized meal plan delivered weekly to your account.
            </p>
          </Card>
        </div>
      </section>
    </Container>
  )
}

export default App
