import { Heading, Text, VStack } from '@chakra-ui/react'
import { VoidFunctionComponent } from 'react'
import { Card } from '../shared/card'
import { AvatarImage, ProfileLink } from './committee-member-styles'

export interface CommitteeMemberProps {
  avatar: string;
  name: string;
  course: string;
  interests: string;
  profileLink: string;
}

export const CommitteeMember: VoidFunctionComponent<CommitteeMemberProps> = ({ avatar, name, course, interests, profileLink }) => {
  return (
    <Card>
      <VStack spacing='1.5rem'>
        <VStack>
          <AvatarImage src={avatar} />
          <Heading as='h4' size='md'>{name}</Heading>
          <Heading as='h6' size='xs' fontWeight='bold'>{course}</Heading>
        </VStack>
        <VStack>
          <Heading as='h6' size='xs' fontWeight='bold'>Interests:</Heading>
          <Text>{interests}</Text>
        </VStack>
        <ProfileLink to={profileLink}>View Profile</ProfileLink>
      </VStack>
    </Card>
  )
}
