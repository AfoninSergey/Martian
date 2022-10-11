"use strict";

document.addEventListener("DOMContentLoaded", () => {
  //START
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
    promoList = document.querySelector(".promo__interactive-list"),
    movieForm = document.querySelector(".add"),
    movieInput = movieForm.querySelector(".adding__input"),
    checkbox = movieForm.querySelector('[type="checkbox"]');
  let bascets;

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
                    <li class="promo__interactive-item">${i + 1}. ${movie}
                        <div class="delete"></div>
                    </li>
                `;
    });
    bascets = document.querySelectorAll(".delete").forEach((bascet, i) => {
      bascet.addEventListener("click", () => {
        // delete movies[i]; // УДАЛЯЕТ НО ОСТАВЛЯЕТ ПУСТУЮ ЯЧЕЙКУ
        movies.splice(i, 1);  

        setInteractiveList(promoList, movies);
      });
    });
  }
  setInteractiveList(promoList, movieDB.movies);

  function addMovie(form, movies, input) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (input.value.trim()) {
        if (input.value.length > 7) {
          input.value = `${input.value.slice(0, 7)}...`;
        }
        if (checkbox.checked) {
          console.log("Добавляем любимый фильм");
        }
        movies.push(input.value);
        e.target.reset(); // form
        setInteractiveList(promoList, movies);
      } else {
        e.target.reset();
        input.placeholder = "Введите название";
    }
    });
  }
  addMovie(movieForm, movieDB.movies, movieInput);

  //END
});
