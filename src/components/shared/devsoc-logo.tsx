import { FunctionComponent } from "react";
import { Image } from '@chakra-ui/react'

import LogoPng from "../../../content/assets/devsoc-logo.png";

export const DevSocLogo: FunctionComponent = () => {
  return <Image margin='0.5rem' height='100%' src={LogoPng} />;
};
