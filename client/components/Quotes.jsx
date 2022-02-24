import React, { useState } from "react";

import { getQuotes } from "../apis/quotes";

function Quotes() {
  const randomNum = Math.floor(Math.random() * 1000);

  const [quotes, setQuotes] = useState([]);

  const handleClick = () => {
    console.log("clicked");
    getQuotes()
      .then((resultsApi) => {
        console.log("final", finalQuotes);
        let finalQuotes = resultsApi[randomNum];
        setQuotes(finalQuotes);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <button onClick={handleClick}></button>
      <h3>
        {quotes.text} - {quotes.author}
      </h3>
    </div>
  );
}

export default Quotes;
