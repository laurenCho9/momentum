const quotes = [
  {
    quote: "The way",
    author: "A",
  },
  {
    quote: "The way",
    author: "B",
  },
  {
    quote: "The way",
    author: "C",
  },
  {
    quote: "The way",
    author: "D",
  },
  {
    quote: "The way",
    author: "E",
  },
  {
    quote: "The way",
    author: "F",
  },
  {
    quote: "The way",
    author: "G",
  },
  {
    quote: "The way",
    author: "H",
  },
  {
    quote: "The way",
    author: "I",
  },
  {
    quote: "The way",
    author: "J",
  },
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
