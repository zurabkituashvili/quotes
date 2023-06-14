import React from "react";

function Quote({ quote, onGetNewQuote, onDeleteQuote }) {
  return (
    <div className="quote">
      <p className="quote-text">"{quote.quote}"</p>
      <p className="quote-author">{quote.author}</p>
      <div className="quote-buttons">
        <button onClick={onGetNewQuote}>Get a new quote</button>
        <button className="delete" onClick={() => onDeleteQuote(quote)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Quote;
