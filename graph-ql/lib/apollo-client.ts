import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  // uri: 'https://pokeapi.co/api/v2/',
  uri: 'https://flyby-gateway.herokuapp.com/',
  cache: new InMemoryCache(),
});
export default apolloClient;
