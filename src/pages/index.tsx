import React, { FunctionComponent } from "react";
import { Link, graphql, PageProps } from "gatsby";
import { DefaultLayout } from "../components/layout/default-layout";
import { BackgroundVideo, ContentSection, Subtitle, Title, VideoOverlay, VideoSection } from "./index.styles";
import { CenteredTitle } from "../components/shared/shared-styles";

import WelcomeVideoMp4 from "../assets/welcome-page-video.mp4"

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
          <Title>The Developer's Society</Title>
          <Subtitle>Nottingham Trent University</Subtitle>
        </VideoOverlay>
      </VideoSection>
      <ContentSection>
        <CenteredTitle>What is DevSoc?</CenteredTitle>
      </ContentSection>
    </DefaultLayout>
  );
};

export default Index;
