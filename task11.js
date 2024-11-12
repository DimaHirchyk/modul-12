// Написати функцію extractNumber,
// яка приймає рядок str і повертає перше число,
// знайдене в рядку.Якщо число не знайдено,
// функція повинна повертати null.

// Приклади використання:

function extractNumber(str) {
  let number = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char >= "0" && char <= "9") {
      number += char;
    } else if (number) {
      return Number(number);
    }
  }

  return number ? Number(number) : null;
}

console.log(extractNumber("abc123def")); // 123
console.log(extractNumber("no numbers here")); // null
console.log(extractNumber("42 is the answer")); // 42
