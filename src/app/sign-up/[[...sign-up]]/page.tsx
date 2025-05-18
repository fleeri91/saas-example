import { SignUp } from '@clerk/nextjs'

const SignupPage = () => (
  <div className="container mx-auto">
    <div className="flex justify-center pt-16">
      <SignUp forceRedirectUrl="/subscribe" />
    </div>
  </div>
)

export default SignupPage
