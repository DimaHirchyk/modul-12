// Написати функцію findFirstOccurrence, яка приймає два аргументи: рядок str і підрядок substr.
//  Функція повинна повертати індекс першого входження підрядка в рядок.
//  Якщо підрядок не знайдено, функція повинна повертати - 1.

function findFirstOccurrence(str, substr) {
    return str.indexOf(substr)
}

// Приклади використання:

function findFirstOccurrence(str, substr) {
  return str.indexOf(substr);
}

console.log(findFirstOccurrence("Hello, world!", "world")); // 7
console.log(
  findFirstOccurrence("Hello, world!", "JavaScript")
); // -1
console.log(findFirstOccurrence("Hello, world!", "Hello")); // 0
