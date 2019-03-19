import React from 'react';
import { Link } from 'gatsby';

const SingleTagIndex = ({ pageContext: { posts, tagName } }) => (
  <div>
    <div>Posts about {tagName}</div>
    <div>
      <ul>
        {posts.map(({ frontmatter }, index) => (
          <li key={index}>
            <Link to={frontmatter.path}>{frontmatter.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default SingleTagIndex;
