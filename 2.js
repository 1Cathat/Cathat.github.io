const quotes = [
  "“代码如诗，简洁为美”",
  "“学习编程的最好方式是动手写”",
  "“不要害怕错误，每个错误都是进步的机会”",
  "“Flex 布局让生活更美好”",
  "“CSS 是化妆师，HTML 是骨架，JS 是灵魂”",
  "“15岁学习编程，未来无限可能”",
  "“我开始只是给我的服务器一个官网...”"
];

//let randomIndex.querySelector('add');
//let randomQuote.querySelector('q');

let add = document.querySelector('#add');
let res = document.querySelector('#e');

add.addEventListener('click', function() {
   let randomIndex = Math.floor(Math.random() * quotes.length);
   let randomQuote = quotes[randomIndex];
   res.textContent = randomQuote;
});