import React, { FunctionComponent } from "react";
import { PageProps } from "gatsby";
import { DefaultLayout } from "../components/layout/default-layout";
import { BackgroundVideo, VideoOverlay, VideoSection } from "./index.styles";

import WelcomeVideoMp4 from "../assets/welcome-page-video.mp4";
import { Container, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { FakeMessage } from "../components/about/fake-message";
import { AboutDevSoc } from '../components/about/about-devsoc'

type IndexProps = PageProps;

const Index: FunctionComponent<IndexProps> = () => {
  return (
    <DefaultLayout title="Home">
      <VideoSection>
        <BackgroundVideo
          src={WelcomeVideoMp4}
          playsInline={true}
          autoPlay={true}
          muted={true}
          loop={true}
        />
        <VideoOverlay>
          <VStack spacing="1rem">
            <Heading as="h1" size="3xl" color="white">
              The Developer's Society
            </Heading>
            <Heading as="h6" size="md" color="white">
              Nottingham Trent University
            </Heading>
          </VStack>
        </VideoOverlay>
      </VideoSection>
      <VStack>
        <AboutDevSoc />
      </VStack>
    </DefaultLayout>
  );
};

export default Index;
