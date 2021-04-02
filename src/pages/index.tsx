import React, { FunctionComponent } from "react";
import { Link, graphql, PageProps } from "gatsby";
import { DefaultLayout } from "../components/layout/default-layout.component";

type IndexProps = PageProps;

const Index: FunctionComponent<IndexProps> = () => {
  return (
    <DefaultLayout title="NTU DevSoc">

    </DefaultLayout>
  );
};

export default Index;