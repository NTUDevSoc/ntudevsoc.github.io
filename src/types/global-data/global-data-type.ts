import { Markdown } from "../markdown/markdown-type";
import { Site } from "../site/site-type";

export type GlobalData = {
  site: Site;
  allMarkdownRemark: Markdown;
};
