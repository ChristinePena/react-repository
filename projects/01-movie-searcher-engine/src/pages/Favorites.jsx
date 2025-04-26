import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

import "../css/Favorites.css";

function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites) {
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movieObj={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="favorites-empty">
      <h2>No favorites movies yet</h2>
      <p>Start adding movies to your favorite and they will appear here</p>
    </div>
  );
}
export default Favorites;
