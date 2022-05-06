import { FunctionComponent } from "react"
import { PageProps } from "gatsby"
import { DefaultLayout } from "../components/layout/default-layout"
import { Container, Heading, VStack } from "@chakra-ui/react"
import { AboutDevSoc } from '../components/about/about-devsoc'
import { Committee } from '../components/committee/committee'
import { BackgroundVideo, VideoOverlay, VideoSection } from '../components/background-video/background-video-styles'

import WelcomeVideoMp4 from "../../content/assets/welcome-page-video.mp4"

type IndexProps = PageProps

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
      <VStack spacing='2rem' marginY='2rem'>
        <AboutDevSoc />
        <Committee />
      </VStack>
    </DefaultLayout>
  )
}

export default Index
