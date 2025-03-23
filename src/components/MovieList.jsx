import PropTypes from 'prop-types';
import MovieItem from './MovieItem';

function MovieList({
  movie,
  toggleFavorite,
  favorites,
  toggleLikes,
  likes,
  dislikes,
  toggleDislikes,
  selectedGenres,
}) {
  return (
    <div className="movie-list">
      {movie
        .filter(
          (movie) =>
            selectedGenres.length === 0 || selectedGenres.includes(movie.genre)
        )
        .map((movie) => (
          <MovieItem
            key={movie.id}
            id={movie.id}
            title={movie.title}
            description={movie.description}
            genre={movie.genre}
            rating={movie.rating}
            image={movie.image}
            toggleFavorite={() => toggleFavorite(movie)}
            isFavorites={favorites.some((fav) => fav.id === movie.id)}
            toggleLikes={() => toggleLikes(movie)}
            likes={likes}
            toggleDislikes={() => toggleDislikes(movie)}
            dislikes={dislikes}
          />
        ))}
    </div>
  );
}

MovieList.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
  favorites: PropTypes.arrayOf(PropTypes.number).isRequired,
  toggleLikes: PropTypes.func.isRequired,
  likes: PropTypes.number.isRequired,
  toggleDislikes: PropTypes.func.isRequired,
  dislikes: PropTypes.number.isRequired,
};

export default MovieList;
