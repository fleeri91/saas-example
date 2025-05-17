import { SignUp } from '@clerk/nextjs'
import { Container, Flex } from '@radix-ui/themes'

const SignupPage = () => (
  <Container align="center" width="full">
    <Flex direction="column" align="center" className="py-32">
      <SignUp forceRedirectUrl="/subscribe" />
    </Flex>
  </Container>
)

export default SignupPage
