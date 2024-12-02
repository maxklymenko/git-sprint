const wordList = require("./word_list.js");

// DO NOT CHANGE ANY CODE ABOVE THIS LINE

console.log(wordList);

// Run this file by typing 'node advanced.js' in your terminal.


// Solutions to advanced challenges
const firstThreeWords = wordList.slice(0,3);
console.log(firstThreeWords)
const lastThreeWords = wordList.slice(-3);
console.log(lastThreeWords)
const wordCount = wordList.length;
console.log(wordCount);
const twoLetterWords = wordList.filter(item => item.length === 2)
console.log(twoLetterWords);
let longestWord = wordList[0];
for (let i = 1; i < wordList.length; i++) {
    if (wordList[i].length > longestWord.length) {
        longestWord = wordList[i];
    }
}
console.log(longestWord);
const regexContainsC = /c/i
const containsC = wordList.filter(word => regexContainsC.test(word));
console.log(containsC);
const reversedWords = wordList.map(word => word.split('').reverse().join(''));
console.log(reversedWords)
const noVovelsRegex = /[^aeiouy]/i
const noVowels = wordList.filter(word => !noVovelsRegex.test(word));
console.log(noVowels)
const repeatedLettersRegex = /(\w)\1/
const repeatedLetters = wordList.filter(word => repeatedLettersRegex.test(word));
console.log(repeatedLetters)