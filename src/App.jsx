import { useCallback, useEffect, useState } from 'react';
import MovieList from './components/MovieList';
import FilterMovies from './components/Filter';
import { fetchMovies } from './fetch/fakeServer';
function App() {
  const [movieData, setMovieData] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [likes, setLikes] = useState({});
  const [dislikes, setDislikes] = useState({});
  const [selectedGenres, setSelectedGenres] = useState('');

  useEffect(() => {
    fetchMovies().then((data) => {
      setMovieData(data);
    });
  }, []);

  const toggleFavorite = useCallback((movie) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(movie)) {
        return prevFavorites.filter((id) => id !== movie.id);
      } else {
        return [...prevFavorites, movie];
      }
    });
  }, []);

  // console.log(favorites);
  const handleLikes = (movie) => {
    setLikes((prevLikes) => {
      if (prevLikes[movie.id]) return prevLikes;

      return {
        ...prevLikes,
        [movie.id]: 1,
      };
    });
  };

  const handleDislikes = (movie) => {
    setDislikes((prevDislikes) => {
      if (prevDislikes[movie.id]) return prevDislikes;
      return {
        ...prevDislikes,
        [movie.id]: 1,
      };
    });
  };

  const handleSelectGenres = (e) => {
    setSelectedGenres(e.target.value);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Киноафиша</h1>
      <FilterMovies
        selectedGenres={selectedGenres}
        toggleSelectGenres={handleSelectGenres}
      />
      <MovieList
        movie={movieData}
        id={movieData.id}
        toggleFavorite={toggleFavorite}
        favorites={favorites}
        toggleLikes={handleLikes}
        likes={likes}
        dislikes={dislikes}
        toggleDislikes={handleDislikes}
        selectedGenres={selectedGenres}
        toggleSelectGenres={handleSelectGenres}
      />
    </div>
  );
}
{
  //   ### 🔥 **Реализация кнопки лайка и дизлайка в MovieItem**
  // 📌 **Что нужно сделать:**
  // 1️⃣ **Добавить состояние лайков** → Создай `likes` в `App.jsx`, чтобы хранить количество лайков для каждого фильма.
  // 2️⃣ **Создать функцию `toggleLike`** → При клике увеличивает или уменьшает количество лайков фильма.
  // 3️⃣ **Передавать `toggleLike` в `MovieItem`** → Кнопка лайка будет работать внутри `MovieItem`.
  // 4️⃣ **Обновить разметку `MovieItem.jsx`** → Добавить кнопку «👍 Лайк» и отображение количества лайков.
  // 5️⃣ **Стилизовать кнопку лайка и дизлайка** → Сделать красивые кнопки.
  // ---
  // ### 📝 **Пошаговый план реализации:**
  // ✅ **Шаг 1. В `App.jsx`**
  // - Создай `likes` в `useState`, где ключ — `id` фильма, а значение — количество лайков.
  // - Напиши функцию `toggleLike`, которая изменяет количество лайков у фильма.
  // - Передай `toggleLike` и `likes` в `MovieList`.
  // ✅ **Шаг 2. В `MovieList.jsx`**
  // - Передай `toggleLike` дальше в `MovieItem`.
  // ✅ **Шаг 3. В `MovieItem.jsx`**
  // - Добавь кнопку «👍 Лайк» и «👎 Дизлайк».
  // - Показывай количество лайков рядом с кнопкой.
  // - При клике вызывай `toggleLike` из `props`.
  // ✅ **Шаг 4. Стилизация**
  // - Сделай кнопки `like-btn` и `dislike-btn` с красивым дизайном.
  // - Добавь эффект `hover` и `active`.
  // ---
  // ### 🔗 **Как все связать?**
  // 📌 `App` → передает `toggleLike` в `MovieList`.
  // 📌 `MovieList` → передает `toggleLike` в `MovieItem`.
  // 📌 `MovieItem` → кнопки вызывают `toggleLike` при клике.
  // ---
  // 🛠 **Теперь ты пишешь код, а я проверю и помогу, если что-то пойдет не так!** 🚀
}
{
  // let movieData = [];
  // fetchMovies().then((data) => {
  //   console.log(data); // Данные успешно получены
  //   movieData = data; // Обновляем переменную
  // });
}
{
  //   MovieList – список фильмов, передаёт данные о фильмах в MovieItem через props.
  // MovieItem – карточка одного фильма (название, описание, рейтинг).
  // MovieGenre – компонент для отображения жанра фильма.
  // MovieRating – компонент, отображающий рейтинг.
}

{
  //     1. Настроить основной компонент App.jsx
  //     Импортируй компонент MovieList в App.jsx.
  //     Подготовь useState (или просто переменную, если без хуков), чтобы передавать данные в MovieList.
  //     Передай массив фильмов через props в MovieList.
  // 2. Настроить компонент MovieList.jsx
  //     Прими массив фильмов через props.
  //     Используй map() для рендера списка фильмов.
  //     Каждый фильм рендерится через компонент MovieCard.
  //     Передавай в MovieCard данные фильма (название, описание, жанр, рейтинг).
  //     Добавь key, чтобы React корректно рендерил список.
  // 3. Создать компонент MovieCard.jsx
  //     Принимай данные фильма через props.
  //     Отображай их внутри JSX-разметки (вёрстка у тебя уже есть).
  //     Используй классы ( className) из стилизации.
  // 4. Добавить обработку клика (события)
  //     В MovieCard.jsx добавь кнопку (например, "Подробнее").
  //     Сделай onClick, который будет выводить alert с описанием фильма.
  //     Это поможет потренировать работу с props и событиями.
  // 5. Проверить работу всей структуры
  //     Запусти проект и убедись, что фильмы загружаются из массива.
  //     Проверь, что клики по кнопкам работают.
  //     Убедись, что стили корректно применяются.
}

export default App;
