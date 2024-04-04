"use strict";

const btn = document.getElementById("e_btn");

const circle = document.getElementById("circle");
const inputText = document.getElementById("text");
const square = document.getElementById("square");
const rangeInput = document.getElementById("range");

// Добавляем обработчик события нажатия клавиши Enter на поле ввода
inputText.addEventListener("keydown", function (event) {
  // Проверяем, нажата ли клавиша Enter
  if (event.key === "Enter") {
    //  цвет из поля ввода
    const color = inputText.value;
    // Устанавливаем цвет фона элемента
    square.style.backgroundColor = color;
    // Очищаем поле ввода
    inputText.value = "";
    // Отменяем стандартное поведение клавиши Enter (предотвращаем отправку формы)
    event.preventDefault();
  }
});

// Добавляем обработчик события input
rangeInput.addEventListener("input", function (event) {
  // Получаем значение из input[type=range]
  const value = event.target.value;
  // Устанавливаем высоту и ширину кружка в процентах
  circle.style.width = value + "%";
  circle.style.height = value + "%";
});

btn.style.display = "none";
