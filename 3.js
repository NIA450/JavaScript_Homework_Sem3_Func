"use strict";

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/

const num1 = Number(prompt("Введите первое число"));
const num2 = Number(prompt("Введите второе число"));
const num3 = Number(prompt("Введите третье число"));
function get_max(num1, num2, num3) {
  const max = Math.max(num1, num2, num3);
  return max;
}
console.log(
  `Максимальное значение среди чисел  ${num1}, ${num2}, ${num3} равно ${get_max(
    num1,
    num2,
    num3
  )}`
);
