/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против...",
            "Антей гонит",
        ],
        },
        banners = document.querySelectorAll(".promo__adv img"),
        promo = document.querySelector(".promo__bg"),
        genre = promo.querySelector(".promo__genre"),
        promoList = document.querySelector(".promo__interactive-list");

    function adb(arr) {
        arr.forEach((banner) => {
        banner.remove();
        });
    }
    adb(banners);

    function setGenre(text) {
        genre.textContent = text;
    }
    setGenre("драма");

    function setPromoBg(url) {
        promo.style.backgroundImage = url;
    }
    setPromoBg("url('img/bg.jpg')");

    function setInteractiveList(list, movies) {
        list.innerHTML = "";
        movies.sort().forEach((movie, i) => {
        list.innerHTML += `
                    <li class="promo__interactive-item">${i+1}. ${movie}
                        <div class="delete"></div>
                    </li>
                `;
        });
    }
    setInteractiveList(promoList, movieDB.movies);
});
