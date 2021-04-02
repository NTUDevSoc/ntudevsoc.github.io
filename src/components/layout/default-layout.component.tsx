import React, { FunctionComponent } from "react";
import { Link } from "gatsby";
import { Footer } from "./footer.component";
import { Header } from "./header.component";

type LayoutProps = {
  title: string;
}

export const DefaultLayout: FunctionComponent<LayoutProps> = ({ title, children }) => {
  return (
    <div className="global-wrapper">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
