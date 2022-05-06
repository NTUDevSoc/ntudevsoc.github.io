import { Box, ChakraProvider } from '@chakra-ui/react'
import { FunctionComponent } from "react";
import { Footer } from "./footer";
import { Header } from "./header";
import { theme } from '../../theme'
import { SEO } from '../shared/seo'

export interface DefaultLayoutProps {
  title: string
}

export const DefaultLayout: FunctionComponent<DefaultLayoutProps> = ({ title, children }) => {
  return (
    <ChakraProvider theme={theme}>
      <SEO title={title} />
      <Box fontFamily="'Open Sans', sans-serif">
        <Header />
        <main>{children}</main>
        <Footer />
      </Box>
    </ChakraProvider>
  );
};
