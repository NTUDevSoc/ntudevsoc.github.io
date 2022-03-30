import { Container, VStack, Heading, Text } from '@chakra-ui/react'
import React, { FunctionComponent, VoidFunctionComponent } from 'react'
import { FakeMessage } from './fake-message'

export const AboutDevSoc: VoidFunctionComponent = () => {
  return (
    <Container maxWidth="container.lg" marginY="1rem">
      <VStack spacing="1rem">
        <Heading as="h3" size="lg" color="black">
          What is DevSoc?
        </Heading>
        <FakeMessage from="student">
          <Text>
            Hi there! Could you tell me a little bit more about DevSoc?
          </Text>
        </FakeMessage>
        <FakeMessage from="committee">
          <Text>
            Hiya! DevSoc is a society under NTU's Department of Computer
            Science that focuses on all things computer science and IT.
          </Text>
          <Text>
            At DevSoc we welcome all kinds of activities ranging from making
            games to tinkering with hardware.
          </Text>
        </FakeMessage>
        <FakeMessage from="student">
          <Text>
            That sounds interesting! How do I get involved?
          </Text>
        </FakeMessage>
        <FakeMessage from="committee">
          <Text>
            Feel free to check out our Discord server as that's where most of
            our community's discussions take place.
          </Text>
          <Text>
            We also have a room located on the Clifton Campus. Room 124 in the
            Mary Ann Evans (MAE 124) building that you can pop into to say
            hello!
          </Text>
        </FakeMessage>
      </VStack>
    </Container>
  )
}