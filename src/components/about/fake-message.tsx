import { Container, Flex, Grid, GridItem, Heading, HStack, VStack } from "@chakra-ui/react";
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {
  FunctionComponent,
  useMemo,
} from "react";
import { theme } from '../../theme'

export interface FakeMessageProps {
  from: "student" | "committee";
}

export const FakeMessage: FunctionComponent<FakeMessageProps> = ({
  children,
  from,
}) => {
  const isCommittee = useMemo(() => from === 'committee', [from]);
  const pictureColor = useMemo(() => getColor(from), [from]);
  const fromHeading = useMemo(() => getHeading(from), [from]);

  return (
    <Flex width='100%'>
      <HStack maxWidth='60%' 
        mr={isCommittee ? '1rem' : 'auto'}
        ml={isCommittee ? 'auto' : '1rem'}
        flexDirection={isCommittee ? 'row-reverse' : 'row'}
        alignItems='start'>
        <Flex paddingX='0.5rem'>
          <FontAwesomeIcon icon={faUserCircle} size='3x' color={pictureColor}></FontAwesomeIcon>
        </Flex>
        <VStack textAlign={isCommittee ? 'right' : 'left'} alignItems={isCommittee ? 'end' : 'start'}>
          <Heading as="h5" size="sm">
            {fromHeading}
          </Heading>
          {children}
        </VStack>
      </HStack>
    </Flex>
  );
};

const getColor = (from: FakeMessageProps["from"]): string => {
  switch (from) {
    case "committee":
      return theme.colors.devsoc.primary;
    case "student":
      return theme.colors.pink['500'];
  }
};

const getHeading = (from: FakeMessageProps["from"]): string => {
  switch (from) {
    case "committee":
      return "DEVS0C_Committee";
    case "student":
      return "C00lKiD123";
  }
};
