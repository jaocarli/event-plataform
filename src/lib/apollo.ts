import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o7504j0uh001xr2mf37d4r/master',
  cache: new InMemoryCache(),
});
