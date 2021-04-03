import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Footer } from "./footer.component";
import { Header } from "./header.component";

type LayoutProps = {
  title: string;
};

const Root = styled.div({
  fontFamily: "'Open Sans', sans-serif"
});

export const DefaultLayout: FunctionComponent<LayoutProps> = ({
  children,
}) => {
  return (
    <Root>
      <Header />
      <main>{children}</main>
      <Footer />
    </Root>
  );
};
