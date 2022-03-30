export type MarkdownNode = {
  excerpt: string;
  html: string;
  fields: { slug: string };
  frontmatter: {
    title: string;
    description: string;
    date: Date;
  };
};
