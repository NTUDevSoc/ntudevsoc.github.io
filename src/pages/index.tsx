import React, { FunctionComponent } from "react";
import { PageProps } from "gatsby";
import { DefaultLayout } from "../components/layout/default-layout";
import { BackgroundVideo, VideoOverlay, VideoSection } from "./index.styles";

import WelcomeVideoMp4 from "../assets/welcome-page-video.mp4"
import { Container, Heading, VStack } from '@chakra-ui/react'

type IndexProps = PageProps;

const Index: FunctionComponent<IndexProps> = () => {
  return (
    <DefaultLayout title="NTU DevSoc - Home">
      <VideoSection>
        <BackgroundVideo
          src={WelcomeVideoMp4}
          playsInline={true}
          autoPlay={true}
          muted={true}
          loop={true}
        />
        <VideoOverlay>
          <VStack spacing='1rem'>
            <Heading as='h1' size='3xl' color='white'>
              The Developer's Society
            </Heading>
            <Heading as='h6' size='md' color='white'>
              Nottingham Trent University
            </Heading>
          </VStack>
        </VideoOverlay>
      </VideoSection>
      <Container maxWidth='container.md' marginY='1rem'>
        <VStack spacing='1rem'>
          <Heading as='h3' size='lg' color='black'>
            What is DevSoc?
          </Heading>

        </VStack>
      </Container>
    </DefaultLayout>
  );
};

export default Index;
