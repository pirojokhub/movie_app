import PropTypes from 'prop-types';
// import movies from '../fetch/movies';

function MovieItem({
  title,
  description,
  genre,
  rating,
  image,
  toggleFavorite,
  isFavorites,
  toggleLikes,
  likes,
  toggleDislikes,
  dislikes,
  id,
}) {
  return (
    <div className="movie-card">
      <img className="movie-image" src={image} alt={title} />
      <div className="movie-content">
        <h2 className="movie-title">{title}</h2>
        <p className="movie-description">{description}</p>
        <div className="movie-info">
          <span className="movie-genre">Жанр: {genre}</span>
          <span className="movie-rating">Рейтинг: {rating}</span>
        </div>
      </div>
      <button className="favorite-btn" onClick={toggleFavorite}>
        {isFavorites ? 'Удалить из избранного' : 'Добавить в избранное'}
      </button>
      <div className="like-container">
        <button className="like-btn" onClick={toggleLikes}>
          👍
        </button>
        <span className="like-count">{likes[id] || 0}</span>
        <button className="dislike-btn" onClick={toggleDislikes}>
          👎
        </button>
        <span className="like-count">{dislikes[id] || 0}</span>
      </div>
    </div>
  );
}
MovieItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
  isFavorites: PropTypes.bool.isRequired,
  toggleLikes: PropTypes.func.isRequired,
  likes: PropTypes.object.isRequired,
  toggleDislikes: PropTypes.func.isRequired,
  dislikes: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
};

export default MovieItem;
