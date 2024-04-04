"use strict";

// Получаем ссылки на элементы
const inputText = document.getElementById("text");

const square = document.getElementById("square");

// Добавляем обработчик события нажатия клавиши Enter на поле ввода
inputText.addEventListener("keydown", function (event) {
  // Проверяем, нажата ли клавиша Enter
  if (event.key === "Enter") {
    // Получаем цвет из поля ввода
    const color = inputText.value;

    // Устанавливаем цвет фона элемента, который вы хотите изменить
    square.style.backgroundColor = color;

    // Очищаем поле ввода
    inputText.value = "";

    // Отменяем стандартное поведение клавиши Enter (предотвращаем отправку формы)
    event.preventDefault();
  }
});
