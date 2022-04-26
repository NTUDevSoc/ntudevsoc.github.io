import { Box, chakra } from '@chakra-ui/react'

export const BackgroundVideo = chakra('video', {
  baseStyle: {
    zIndex: -1,
    minWidth: "100%",
    minHeight: "100%",
    position: "absolute",
  }
});

export const VideoSection = chakra(Box, {
  baseStyle: {
    height: "75vh",
    minHeight: "25rem",
    position: "relative",
    overflow: "hidden",
  }
});

export const VideoOverlay = chakra(Box, {
  baseStyle: {
    position: "relative",
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.4)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  }
});