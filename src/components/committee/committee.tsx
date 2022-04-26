import React, { FunctionComponent } from 'react'
import { CommitteeMember } from './committee-member'
import { Heading, SimpleGrid, VStack } from '@chakra-ui/react'

import JoshAvatar from '../../../content/assets/avatars/joshua-waters.jpg'
import EllieAvatar from '../../../content/assets/avatars/ellie-cooley.jpg'
import TugraAvatar from '../../../content/assets/avatars/tugra-karakus.jpg'
import JayAvatar from '../../../content/assets/avatars/jay-cosworth-biddlecombe.jpg'

export const Committee: FunctionComponent = () => {
  return (
    <VStack padding='0.5rem'>
      <Heading as="h3" size="lg" color="black">
        Principal Committee 2021-22:
      </Heading>
      <SimpleGrid columns={2} spacing={10} padding='0.5rem'>
        <CommitteeMember
          avatar={JoshAvatar}
          name="Joshua Waters"
          course="BSc (H) Computer Science"
          interests="Gaming, Modding and Programming"
          profileLink="https://jwaters.dev" />
        <CommitteeMember
          avatar={EllieAvatar}
          name="Ellie Cooley"
          course="BSc (H) Computer Systems (Cyber Security)"
          interests="Self Defence, Campanology and Enigmatology"
          profileLink="#" />
        <CommitteeMember
          avatar={TugraAvatar}
          name="Tugra Karakus"
          course="BSc (H) Computer Science"
          interests="Travelling, Film and Working Out"
          profileLink="https://www.linkedin.com/in/tugra-karakus" />
        <CommitteeMember
          avatar={JayAvatar}
          name="Jay-Cosworth Biddlecombe"
          course="BSc (H) Computer Systems (Cyber Security)"
          interests="Gaming, Photography and Hacking"
          profileLink="https://www.j4y.dev/" />
      </SimpleGrid>
    </VStack>
  )
}
