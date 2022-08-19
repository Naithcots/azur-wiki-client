import GlobalStyle from "../styles/GlobalStyle";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { NationProvider } from "../context/NationContext";
import { BodyOverflowProvider } from "../context/BodyOverflowContext";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: "https://cryptic-shore-85492.herokuapp.com/graphql",
    // uri: "http://localhost:1337/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <>
      <NationProvider>
        <BodyOverflowProvider>
          <GlobalStyle />
          <ApolloProvider client={client}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ApolloProvider>
        </BodyOverflowProvider>
      </NationProvider>
    </>
  );
}

export default MyApp;
