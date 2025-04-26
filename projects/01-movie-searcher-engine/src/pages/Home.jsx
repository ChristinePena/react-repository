import MovieCard from "../components/MovieCard";
import "../css/Home.css";
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

  // CALL API
  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false); // 3.1
      }
    };

    loadPopularMovies();
  }, []);

  // SEARCH INPUT
  const handleSearch = async (e) => {
    e.preventDefault();
    // alert(searchQuery);

    if (!searchQuery.trim()) return;
    if (loading) return;
    setLoading(true); // we are currently loading
    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError(null); // clear error before
    } catch (err) {
      setError("Failed to search movies");
    } finally {
      setLoading(false);
    }

    setSearchQuery("");
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) =>
            //console.log(e.target.value);
            setSearchQuery(e.target.value)
          }
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard movieObj={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
