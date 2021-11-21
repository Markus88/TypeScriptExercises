class Kata {
  static spinWords(words: string): string {
    var reversedWord = "";
    for (let index = words.length - 1; index >= 0; index--) {
      reversedWord += words[index];
    }
    return reversedWord;
  }
}

const reverseWordsExcersise = new Kata();

console.log(Kata.spinWords("Hey fellow warriors"));
