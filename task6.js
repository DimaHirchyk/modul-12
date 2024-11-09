// Написати функцію removeVowelsFromWords,
//   яка приймає рядок str і повертає новий рядок,
//     у якому з кожного слова видалені всі голосні букви.

const vowels = "aeiouAEIOU";

function removeVowelsFromWords(str) {
  let newWord = "";
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
    if (vowels.includes(str[i])) {
      continue;
    } else {
      newWord += str[i];
    }
  }
  return newWord;
}

// Приклади використання:
console.log(removeVowelsFromWords("Hello, world!")); // "Hll, wrld!"
console.log(
  removeVowelsFromWords("JavaScript is awesome!")
); // "JvScrpt s wsm!"
console.log(
  removeVowelsFromWords("Remove vowels from words")
); // "Rmv vwls frm wrds"
