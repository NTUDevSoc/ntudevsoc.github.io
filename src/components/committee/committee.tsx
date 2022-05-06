import { FunctionComponent } from 'react'
import { CommitteeMember } from './committee-member'
import { Container, Heading, SimpleGrid, VStack } from '@chakra-ui/react'

import JoshAvatar from '../../../content/assets/avatars/joshua-waters.jpg'
import EllieAvatar from '../../../content/assets/avatars/ellie-cooley.jpg'
import TugraAvatar from '../../../content/assets/avatars/tugra-karakus.jpg'
import JayAvatar from '../../../content/assets/avatars/jay-cosworth-biddlecombe.jpg'
import PeterAvatar from '../../../content/assets/avatars/peter-lampard.jpg'
import HannahAvatar from '../../../content/assets/avatars/hannah-ashna-jacob.jpg'
import JaradAvatar from '../../../content/assets/avatars/jarad-johnson-bailey.jpg'
import EmiAvatar from '../../../content/assets/avatars/emily-povi.jpg'

export const Committee: FunctionComponent = () => {
  return (
    <Container maxWidth='container.lg'>
      <VStack spacing='2rem' marginY='3rem'>
        <Heading as="h3" size="lg" color="black">
          Principal Committee 2021-2022
        </Heading>
        <SimpleGrid columns={2} spacing={10} paddingX='5rem' width="100%">
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
      <VStack spacing='2rem' marginY='3rem'>
        <Heading as="h3" size="lg" color="black">
          Supporting Committee
        </Heading>
        <SimpleGrid columns={2} spacing={10} paddingX='5rem' width="100%">
          <CommitteeMember
            avatar={PeterAvatar}
            name="Peter Lampard"
            course="BSc (H) Software Engineering"
            interests="Photography, Cars and Drones"
            profileLink="https://www.linkedin.com/in/petelampy/" />
          <CommitteeMember
            avatar={HannahAvatar}
            name="Hannah Ashna Jacob"
            course="BSc (H) Computer Science (Games Tech)"
            interests="Gaming, Theatre and anything Punk"
            profileLink="https://www.linkedin.com/in/hannah-ashna-jacob/" />
          <CommitteeMember
            avatar={JaradAvatar}
            name="Jarad Johnson-Bailey"
            course="BSc (H) Computer Science"
            interests="Games, DnD and 2000s Pop-Punk"
            profileLink="https://www.linkedin.com/in/jaradjb/" />
          <CommitteeMember
            avatar={EmiAvatar}
            name="Emily Povi"
            course="BSc (H) Computer Science (Games Tech)"
            interests="Games, Being Artsy and Travel"
            profileLink="https://github.com/emiipo" />
        </SimpleGrid>
      </VStack>
    </Container>
  )
}
