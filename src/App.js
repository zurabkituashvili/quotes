import React, { useState } from "react";
import Quote from "./Quote";
import "./Styles.css";

const quotes = [
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    quote:
      "Don't judge each day by the harvest you reap but by the seeds that you plant.",
    author: "Robert Louis Stevenson",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost",
  },
  {
    quote:
      "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote: "Life is really simple, but we insist on making it complicated.",
    author: "Confucius",
  },
  {
    quote:
      "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    author: "Helen Keller",
  },
  {
    quote: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
  },
  {
    quote: "Life is 10% what happens to you and 90% how you react to it.",
    author: "Charles R. Swindoll",
  },
];

function App() {
  const [quoteList, setQuoteList] = useState([quotes[0]]);

  const addNewQuote = () => {
    if (quoteList.length === quotes.length) {
      alert("No more quotes");
    } else {
      let newQuote;
      do {
        newQuote = quotes[Math.floor(Math.random() * quotes.length)];
      } while (quoteList.map((quote) => quote.quote).includes(newQuote.quote));
      setQuoteList([...quoteList, { ...newQuote, id: quoteList.length }]);
    }
  };

  const deleteQuote = (quoteToDelete) => {
    setQuoteList(quoteList.filter((quote) => quote !== quoteToDelete));
  };

  const deleteAllQuotes = () => {
    setQuoteList([]);
  };

  return (
    <div className="App">
      <button className="delete-all" onClick={deleteAllQuotes}>
        Delete all
      </button>
      {quoteList.map((quote) => (
        <Quote
          key={quote.id}
          quote={quote}
          onGetNewQuote={addNewQuote}
          onDeleteQuote={deleteQuote}
        />
      ))}
    </div>
  );
}

export default App;
