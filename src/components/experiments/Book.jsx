import React, { useContext } from 'react';
import CurrencyContext from './CurrencyContext.jsx';
import BookBuyButton from './BookBuyButton.jsx';

const Book = ({ item }) => {
  const { currency } = useContext(CurrencyContext);
 
  return (
    <li style={{lineHeight: "1.85em"}}>
      <BookBuyButton />&nbsp; &nbsp; {item.title} - {item.price} {currency}
    </li>
  );
};

export default Book