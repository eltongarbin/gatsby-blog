import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

export const query = graphql`
  query HomepageQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            path
            date
          }
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{ textAlign: 'center' }}>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.frontmatter.path} style={{ marginBottom: '1rem' }}>
          <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
        </div>
      ))}
      <div>
        <Link to="/tags">Browse by Tag</Link>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
