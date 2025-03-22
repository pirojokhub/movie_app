// import { useState } from 'react';
import PropTypes from 'prop-types';

function FilterMovies({ selectedGenres, toggleSelectGenres }) {
  return (
    <div className="filter-container">
      <label htmlFor="genre-select" className="filter-label">
        Выберите жанр:
      </label>
      <select
        id="genre-select"
        className="filter-select"
        onChange={toggleSelectGenres}
        value={selectedGenres}
      >
        <option value="">Все жанры</option>
        <option value="Sci-Fi">Научная фантастика</option>
        <option value="Action">Экшн</option>
        <option value="Drama">Драма</option>
        <option value="Comedy">Комедия</option>
        <option value="Horror">Ужасы</option>
      </select>
    </div>
  );
}
export default FilterMovies;

FilterMovies.propTypes = {
  selectedGenres: PropTypes.string.isRequired,
  toggleSelectGenres: PropTypes.func.isRequired,
};
