import React, { useContext } from 'react';
import CurrencyContext from './CurrencyContext.jsx';
import Book from './Book.jsx';


const Books = () => {
  const { list } = useContext(CurrencyContext)
  return (
    <ul style={{listStyleType: "none", paddingInlineStart: "10px"}}>
      {list.map((item) => (
        <Book key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default Books