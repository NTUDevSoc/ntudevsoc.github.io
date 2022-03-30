import { Box } from '@chakra-ui/react'
import React, { FunctionComponent } from "react";

export const Footer: FunctionComponent = () => {
  return (
    <Box backgroundColor='devsoc.primary' color='devsoc.secondary' textAlign='center' padding='0.5rem'>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
      {` `}
      by NTU DevSoc
    </Box>
  );
};
