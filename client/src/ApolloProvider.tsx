import {
  InMemoryCache,
  HttpLink,
  ApolloClient,
  NormalizedCacheObject,
  ApolloProvider as Provider,
} from '@apollo/client';
import { fields } from './localState';
import React from 'react';

export type ApolloProviderProps = React.PropsWithChildren<{}>;

const cache = new InMemoryCache({
  resultCaching: true,
  typePolicies: {
    Query: {
      fields,
    },
  },
});
const link = new HttpLink({
  uri: 'http://localhost:4000/graphql',
});

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  resolvers: {},
  link,
});

export const ApolloProvider: React.FC<ApolloProviderProps> = (
  props: ApolloProviderProps
) => {
  return <Provider client={client}>{props.children}</Provider>;
};
