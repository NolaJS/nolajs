import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import gql from 'graphql-tag';

import { client } from '../../prismic.config';

const query = gql`
  query {
    allBlog_posts {
      edges {
        node {
          title
          summary
          _meta {
            uid
          }
        }
      }
    }
  }
`;

const Blog = ({ posts }) => {
  return (
    <div>
      <h1>Blog</h1>
      <div>
        {posts.map(p => (
          <div key={p.uid}>
            <h3>{RichText.asText(p.title)}</h3>
            <p>{RichText.asText(p.summary)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

Blog.getInitialProps = async () => {
  const posts = await client.query({ query });
  const structuredPosts = posts.data.allBlog_posts.edges.map(p => {
    const {
      node: {
        _meta: { uid },
        summary,
        title,
      },
    } = p;
    return {
      summary,
      title,
      uid,
    };
  });
  return {
    posts: structuredPosts,
  };
};

export default Blog;
