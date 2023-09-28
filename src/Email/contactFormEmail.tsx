import type { ContactEmailFormProps } from '../lib/types'
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text
} from '@react-email/components'
import { Tailwind } from '@react-email/tailwind'

const ContactFormEmail: React.FC<ContactEmailFormProps> = ({ message, sender }) => {
  return (
    <Html>
      <Head />
      <Preview>New Message For your portfolio site</Preview>
      <Tailwind>
        <Body className="bg-gray-10">
          <Container className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
            <Section className="leading-tight">
              <Heading>You recieved the following message from the contact form</Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>The sender email is:{sender}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default ContactFormEmail
