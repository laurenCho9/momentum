const quotes = [
  {
    quote: "빨리 가는 유일한 방법은 제대로 가는 것이다.",
    author: "-Robert C. Martin, <클린 코드>의 저자",
  },
  {
    quote: "훌륭한 코드는 훌륭한 문서보다 낫다.",
    author: "-Steve McConnell, 개발자",
  },
  {
    quote: "먼저 문제를 풀고 그 다음에 개발을 하라.",
    author: "-John Johnson, 미국의 소프트웨어 강사",
  },
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
