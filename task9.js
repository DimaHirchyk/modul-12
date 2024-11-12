//? Дано рядок, який складається із символів.Напишіть функію
//? яка перевіряє, що першим символом цього рядка є літера 'a'.
//? Якщо це так - вивести "так", у іншому випадку вивести "ні"
function firstSymb(string) {
  if (string.startsWith("a")) {
    return "так";
  } else {
    return "ні";
  }
}
const string = "abcde"; // тестовий рядок 1
const stringSecond = "bcde"; // тестовий рядок 2
const subString = "absolute"; // тестовий рядок 3

console.log(firstSymb(string)); // так
console.log(firstSymb(stringSecond)); // ні
console.log(firstSymb(subString)); // так
