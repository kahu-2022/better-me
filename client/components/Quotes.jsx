import React, { useEffect, useState } from 'react'

import { getQuotes } from '../apis/quotes'

function Quotes () {
  const randomNum = Math.floor(Math.random() * 1000)

  const [quotes, setQuotes] = useState([])

  useEffect(() => {
    handleClick()
  }, [])

  const handleClick = () => {
    console.log('clicked')
    getQuotes()
      .then((resultsApi) => {
        const finalQuotes = resultsApi[randomNum]
        setQuotes(finalQuotes)
        return null
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  return (
    <div className="footer">
      {/* <button onClick={handleClick}></button> */}
      <h4>
        {quotes.text} <em>-{quotes.author}</em>
      </h4>
    </div>
  )
}

export default Quotes
