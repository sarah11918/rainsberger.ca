import React from "react";
import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client";
import OtherWeather from "./OtherWeather.jsx";

function ApolloApp() {

  const client = new ApolloClient ({
    cache: new InMemoryCache(),
    uri: "https://graphql-weather-api.herokuapp.com",
  })

  return (
    <ApolloProvider client={client}>
      <h1> Weather App </h1>
      <OtherWeather />
    </ApolloProvider>
  );
}

export default ApolloApp;