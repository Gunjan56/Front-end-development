const random = Math.floor(Math.random()*10);
const quote = [
    "Any fool can write code that a computer can understand good programmers write code that humans can understand.\n--Martin Fowler",
    "Programming is the art of telling another human being what one wants the computer to do.\n --Donald Ervin Knuth",
    "Quality is a product of a conflict between programmers and testers.\n --Yegor Bugayenk",
    "Everybody should learn to program a computer because it teaches you how to think.\n--Steve Jobs",
    "Web development is difficult, only then it is fun to do. you just have to set your standards. if it were to be easy, would anyone do it?\n--Olawale Daniel",
    "Most good programmers do programming not becausethey expect to get paid or get adulation by the public, but because it is fun to program.\n--Linus Torvalds",
    "I'm not great programmer; i am just a good programmer with great habits.\n --Kent Beck",
    "Programming is learned by writing programs. \n--Brian Kernighen",
    "If debugging is the process of removing bugs, then programming must be the process of putting them in.\n--Sam Redwine",
    "Computers are fast; developers keep them slow.\n--Anonymous"
];
const quoteNow = quote[random];
console.log(`Quote Number ${random} ${quoteNow}`);
//dom code
const quoteHeading = document.querySelector("#quote");
quoteHeading.textContent = `QuoteNumber ${random+1}`;
const element = document.querySelector("#target");
element.textContent = `${quote[random]}`

