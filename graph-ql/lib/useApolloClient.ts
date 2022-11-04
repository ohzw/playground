import { ApolloClient, InMemoryCache } from '@apollo/client';

export function useApolloClient(uri: string) {
  return new ApolloClient({
    uri: uri,
    cache: new InMemoryCache(),
  });
}
