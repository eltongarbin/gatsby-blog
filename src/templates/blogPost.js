import React from 'react';
import { graphql, Link } from 'gatsby';

const Template = ({
  data: { markdownRemark },
  pageContext: { next, prev }
}) => (
  <div>
    <h1>{markdownRemark.frontmatter.title}</h1>
    <div
      className="blogpost"
      dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
    />
    {next && (
      <Link style={{ display: 'block' }} to={next.frontmatter.path}>
        Next
      </Link>
    )}
    {prev && (
      <Link style={{ display: 'block' }} to={prev.frontmatter.path}>
        Prev
      </Link>
    )}
  </div>
);

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default Template;
