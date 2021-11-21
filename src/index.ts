export class Kata {
  static spinWords(words: string): string {
    var reversedWord = "";
    var stringSplittedUpIntoArray = words.split(" "); // ' ' just means that it splits the words, with one spaces ' '.

    for (
      let indexOfArray = 0;
      indexOfArray < stringSplittedUpIntoArray.length;
      indexOfArray++
    ) {
      const element = stringSplittedUpIntoArray[indexOfArray];
      if (element.length > 5) {
        for (let index = element.length - 1; index >= 0; index--) {
          reversedWord += element[index];
        }
      } else {
        reversedWord += element;
      }

      if (indexOfArray !== stringSplittedUpIntoArray.length - 1) {
        reversedWord += " ";
      }
    }

    return reversedWord;
  }
}

const reverseWordsExcersise = new Kata();

console.log(Kata.spinWords("Hey fellow warriors"));
// Hey wollef sroirraw
