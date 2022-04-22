import React from "react";
import CurrencyContext from "./CurrencyContext.jsx";
import Books from "./Books.jsx";

const DATA = {
  list: [
    {
      id: "1",
      title: "The Road to React",
      price: 19.99
    },
    {
      id: "2",
      title: "The Road to GraphQL",
      price: 29.99
    },
    {
      id: "3",
      title: "The Road to GastbyJS",
      price: 29.99
    },
    {
      id: "4",
      title: "The Rocket to Astro!",
      //title: 'The Voyage to Astro!',
      price: 29.99
    }
  ],

  buy: () => {
    alert("Sorry, you can't buy. This is just a test!");
  },

  currency: "$"
};

const CurrencyApp = () => {
  return (
    <CurrencyContext.Provider value={DATA}>
      <Books />
    </CurrencyContext.Provider>
  );
};

export {CurrencyApp, DATA};