import { PrismicLink } from 'apollo-link-prismic';
import { InMemoryCache } from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-client';

const uri = 'https://nolajs.prismic.io/graphql';

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: PrismicLink({
    uri,
  }),
});
