import React, { useState } from "react";
import { getQuotes } from "../apis/quotes";

// import { getQuotes } from "../api/quotes";

function Quotes() {
  const [quotes, setQuotes] = useState([]);

  const handleClick = () => {
    console.log(quotes);
    getQuotes(quotes)
      .then((resultsApi) => {
        console.log(resultsApi);
        setQuotes(resultsApi);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <>
      <h2>Quotes</h2>

      {/* {quotes.map((item) => {
          item.text;
        })} */}
      <ul>
        {quotes.map((elem) => (
          <li>{elem.text}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Get quotes </button>
    </>
  );
}

export default Quotes;
