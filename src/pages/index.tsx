import React, { FunctionComponent } from "react";
import { Link, graphql, PageProps } from "gatsby";
import { DefaultLayout } from "../components/layout/default-layout.component";
import { BackgroundVideo, VideoSection } from "../index.styles";

type IndexProps = PageProps;

const Index: FunctionComponent<IndexProps> = () => {
  return (
    <DefaultLayout title="NTU DevSoc - Home">
      <VideoSection>
        <BackgroundVideo
          src="../assets/welcome-page-video.mp4"
          playsInline={true}
          autoPlay={true}
          muted={true}
          loop={true}
        />
      </VideoSection>
      
    </DefaultLayout>
  );
};

export default Index;
