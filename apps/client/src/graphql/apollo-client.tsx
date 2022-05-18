import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { FC, ReactNode } from 'react';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
});

const Apollo: FC<{ children: ReactNode }> = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default Apollo;
