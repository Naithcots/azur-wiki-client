import GlobalStyle from "../styles/GlobalStyle";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: "https://cryptic-shore-85492.herokuapp.com/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <>
      <GlobalStyle />
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}

export default MyApp;
