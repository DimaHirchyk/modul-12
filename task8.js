// Написати функцію removeCharacter, яка приймає два аргументи:
// рядок str і символ char.Функція повинна повертати новий рядок,
//   у якому всі входження символу char видалені. Використовуйте цикл while

// Приклади використання:

function removeCharacter(str, char) {
  let newStr = "";
  let index = 0;
  while (index < str.length) {
    console.log(newStr);
    if (str[index] !== char) {
      newStr += str[index];
    }
    index++;
  }
  return newStr;
}

console.log(removeCharacter("Hello, world!", "o")); // "Hell, wrld!"
console.log(removeCharacter("JavaScript", "a")); // "JvScript"
console.log(removeCharacter("12345", "3")); // "1245"
