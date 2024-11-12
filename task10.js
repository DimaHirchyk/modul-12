// Написати функцію countOccurrences, яка приймає два аргументи:
// рядок str і символ char.Функція повинна повертати кількість входжень
// символу char у рядку str.

// Приклади використання:

function countOccurrences(str, char) {
  let total = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      total += 1;
    }
  }
  return total;
}

console.log(countOccurrences("Hello, world!", "o")); // 2
console.log(countOccurrences("JavaScript", "a")); // 2
console.log(countOccurrences("12345", "3")); // 1
