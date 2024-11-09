// Написати функцію removeSubstring, яка приймає два аргументи:
// рядок str і підрядок substr.Функція повинна повертати новий рядок,
//   у якому перше входження підрядка буде видалено.Якщо підрядок не знайдено,
//     функція повинна повертати оригінальний рядок.

function removeSubstring(str, substr) {
    const index = str.indexOf(substr);

    if (index === -1) {
        return str;
    } else {
        return str.slice(0, index) + str.slice(index + substr.length);
    }
}

// Приклади використання:
function removeSubstring (str, substr) {
  const index = str.indexOf(substr);
  if (index === -1) {
    return str;
  }
  return str.slice(0, index) + str.slice(index + substr.length);
}

console.log(removeSubstring('Hello, world!', 'world')) // "Hello, !"
console.log(removeSubstring('Hello, world!', 'JavaScript')) // "Hello, world!"
console.log(removeSubstring('Hello, world!', 'Hello')) // ", world!"
