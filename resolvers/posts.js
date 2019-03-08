const { gql } = require('apollo-server-express');
const { find, filter } = require('lodash');

const schema = gql`
  type Post {
    title: String
    author: Author
  }

  type Author {
    posts: [Post]
  }

  type Query {
    author: Author
  }
`;

const resolvers = {
    Query: {
        // eslint-disable-next-line
        author(parent, args, context, info) {
            // eslint-disable-next-line
            return find(authors, { id: args.id });
        },
    },
    Author: {
        posts(author) {
            // eslint-disable-next-line
            return filter(posts, { author: author.name });
        },
    },
};

module.exports = {
    postResolvers: resolvers,
    postSchema: schema
};