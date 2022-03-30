import styled from "styled-components";

export const BackgroundVideo = styled.video({
  zIndex: -1,
  minWidth: "100%",
  minHeight: "100%",
  position: "absolute",
});

export const VideoSection = styled.div({
  height: "75vh",
  minHeight: "25rem",
  position: "relative",
  overflow: "hidden",
});

export const ContentSection = styled.div({
  margin: "1rem",
});

export const VideoOverlay = styled.div({
  position: "relative",
  width: "100%",
  height: "100%",
  background: "rgba(0, 0, 0, 0.4)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
});

export const Title = styled.h1({
  color: "#fff",
  fontSize: "4.5em",
  fontWeight: 300,
});

export const Subtitle = styled.h2({
  color: "#fff",
  fontWeight: 300,
});
