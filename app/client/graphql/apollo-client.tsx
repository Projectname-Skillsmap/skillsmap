import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { FC } from "react";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

const Apollo: FC = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default Apollo;
