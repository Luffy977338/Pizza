import React from 'react'
import pizza from '../images/pizza.jpg'

export const pizzaList = [
   { id: 1, totalPrice: 499, type: 'Классическое', count: 1, size: 28, name: 'Трюфельная Делюкс', composition: 'Ветчина, Грибы, Сыр Моцарелла, Трюфельный соус', price: 499, img: pizza },
   { id: 2, totalPrice: 349, type: 'Классическое', count: 1, size: 28, name: 'Маргарита', composition: 'Томатный соус, Сыр Моцарелла, Базилик', price: 349, img: pizza },
   { id: 3, totalPrice: 399, type: 'Классическое', count: 1, size: 28, name: 'Четыре Сыра', composition: 'Сыр Моцарелла, Сыр Пармезан, Сыр Горгонзола, Сыр Дор-Блю', price: 399, img: pizza },
   { id: 4, totalPrice: 429, type: 'Классическое', count: 1, size: 28, name: 'Пепперони', composition: 'Пепперони, Сыр Моцарелла, Томатный соус', price: 429, img: pizza },
   { id: 5, totalPrice: 379, type: 'Классическое', count: 1, size: 28, name: 'Гавайская', composition: 'Ветчина, Ананас, Сыр Моцарелла, Томатный соус', price: 379, img: pizza },
   { id: 6, totalPrice: 389, type: 'Классическое', count: 1, size: 28, name: 'Вегетарианская', composition: 'Томатный соус, Оливки, Шампиньоны, Перец, Лук, Сыр Моцарелла', price: 389, img: pizza },
   { id: 7, totalPrice: 449, type: 'Классическое', count: 1, size: 28, name: 'Мясная', composition: 'Ветчина, Пепперони, Колбаски, Сыр Моцарелла, Томатный соус', price: 449, img: pizza },
   { id: 8, totalPrice: 369, type: 'Классическое', count: 1, size: 28, name: 'Сырная', composition: 'Сыр Моцарелла, Сыр Чеддер, Сыр Гауда', price: 369, img: pizza },
   { id: 10, totalPrice: 479, type: 'Классическое', count: 1, size: 28, name: 'Специальная', composition: 'Ветчина, Пепперони, Шампиньоны, Перец, Лук, Оливки, Сыр Моцарелла, Томатный соус', price: 479, img: pizza },
   { id: 11, totalPrice: 459, type: 'Классическое', count: 1, size: 28, name: 'Мексиканская', composition: 'Говядина, Лук, Чили, Фасоль, Томатный соус, Сыр Моцарелла', price: 459, img: pizza },
   { id: 12, totalPrice: 529, type: 'Классическое', count: 1, size: 28, name: 'Морская', composition: 'Кальмар, Мидии, Креветки, Лук, Томатный соус, Сыр Моцарелла', price: 529, img: pizza },
   { id: 13, totalPrice: 489, type: 'Классическое', count: 1, size: 28, name: 'Мясная Страсть', composition: 'Говядина, Свинина, Колбаски, Ветчина, Сыр Моцарелла, Томатный соус', price: 489, img: pizza },
   { id: 14, totalPrice: 449, type: 'Классическое', count: 1, size: 28, name: 'Вегетарианская', composition: 'Брокколи, Грибы, Шпинат, Перец, Лук, Томатный соус, Сыр Моцарелла', price: 449, img: pizza },
   { id: 15, totalPrice: 419, type: 'Классическое', count: 1, size: 28, name: 'Салями', composition: 'Салями, Сыр Моцарелла, Томатный соус', price: 419, img: pizza },
   { id: 16, totalPrice: 439, type: 'Классическое', count: 1, size: 28, name: 'Фруктовая', composition: 'Ананас, Персик, Киви, Сладкий соус, Сыр Моцарелла', price: 439, img: pizza },
   { id: 17, totalPrice: 439, type: 'Классическое', count: 1, size: 28, name: 'Баварская', composition: 'Ветчина, Колбаски, Сыр Моцарелла, Лук, Томатный соус', price: 439, img: pizza },
   { id: 18, totalPrice: 379, type: 'Классическое', count: 1, size: 28, name: 'Грибная', composition: 'Шампиньоны, Лук, Сыр Моцарелла, Томатный соус', price: 379, img: pizza },
   { id: 19, totalPrice: 469, type: 'Классическое', count: 1, size: 28, name: 'Американская', composition: 'Ветчина, Пепперони, Колбаски, Бекон, Сыр Моцарелла, Томатный соус', price: 469, img: pizza },
   { id: 20, totalPrice: 449, type: 'Классическое', count: 1, size: 28, name: 'Сырный Вулкан', composition: 'Сыр Моцарелла, Сыр Гауда, Сыр Чеддер, Сыр Пармезан, Сыр Горгонзола', price: 449, img: pizza },
   { id: 21, totalPrice: 419, type: 'Классическое', count: 1, size: 28, name: 'Грибной Драйв', composition: 'Шампиньоны, Оливки, Лук, Перец, Томатный соус, Сыр Моцарелла', price: 419, img: pizza },
   { id: 22, totalPrice: 479, type: 'Классическое', count: 1, size: 28, name: 'Пицца Хаус', composition: 'Ветчина, Пепперони, Колбаски, Шампиньоны, Сыр Моцарелла, Томатный соус', price: 479, img: pizza },
   { id: 23, totalPrice: 469, type: 'Классическое', count: 1, size: 28, name: 'Тоскана', composition: 'Курица, Грибы, Шпинат, Лук, Сыр Моцарелла, Томатный соус', price: 469, img: pizza },
   { id: 24, totalPrice: 529, type: 'Классическое', count: 1, size: 28, name: 'Морепродукты', composition: 'Кальмар, Креветки, Мидии, Лук, Томатный соус, Сыр Моцарелла', price: 529, img: pizza },
   { id: 25, totalPrice: 489, type: 'Классическое', count: 1, size: 28, name: 'Барбекю', composition: 'Говядина, Колбаски, Бекон, Лук, Сладкий соус, Сыр Моцарелла', price: 489, img: pizza }
];