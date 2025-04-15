import { SignUp } from '@clerk/nextjs'

const SignupPage = () => (
  <div className="align-center mx-auto flex max-w-7xl justify-center px-4 py-8 sm:py-12 lg:py-16">
    <SignUp forceRedirectUrl="/subscribe" />
  </div>
)

export default SignupPage
