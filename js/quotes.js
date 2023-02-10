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
    author: "-John Johnson, 미국의 유명한 소프트웨어 강사",
  },
  {
    quote:
      "항상 이런 생각으로 개발에 임하라. “내 소스를 유지보수하게 되는 개발자가 내가 어디 살고 있는지 알고 있는 과격한 사이코패스일 것이다.”",
    author: "-Martin Golding",
  },
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
