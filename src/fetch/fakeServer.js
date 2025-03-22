import movies from './movies.js';
function fetchMovies() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(movies); // Возвращаем список фильмов с задержкой 1 секунда
    }, 1000);
  });
}
export { fetchMovies };
