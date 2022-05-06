import { FunctionComponent } from "react";
import { graphql, PageProps } from "gatsby";

import { DefaultLayout } from "../components/layout/default-layout";
import { SEO } from "../components/shared/seo";
import { GlobalData } from "../types/global-data/global-data-type";

type NotFoundProps = PageProps & {
  data: GlobalData;
};

const NotFoundPage: FunctionComponent<NotFoundProps> = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <DefaultLayout title="404: Not Found">
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </DefaultLayout>
  );
};

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
