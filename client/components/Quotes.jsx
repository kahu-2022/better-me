import React, { useState } from "react";

import { getQuotes } from "../apis/quotes";

function Quotes() {
  const [quotes, setQuotes] = useState([]);

  const handleClick = () => {
    console.log("clicked");
    getQuotes()
      .then((resultsApi) => {
        console.log(quotes);
        setQuotes(resultsApi);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <button onClick={handleClick}></button>
      <ul>
        {/* {quotes} */}
        {quotes.map((elem) => (
          <li key={elem.text}>
            {elem.text} - {elem.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Quotes;
