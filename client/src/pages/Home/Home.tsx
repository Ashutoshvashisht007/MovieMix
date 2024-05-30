import { useEffect, useState } from "react"
import "./home.css"
import MovieCard from "../../components/movieCard/MovieCard"
import { apiResponse } from "../../utils/types";

const Home = () => {

  const [value, setValue] = useState<string>("");
  const [movies, setMovies] = useState<apiResponse | null>(null);

  useEffect(() => {
    if (value.trim() === "") {
      setMovies(null);
      return;
    }

    const getData = setTimeout(async () => {
      try {
        const API_KEY = import.meta.env.VITE_API_KEY;
        const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${value}`);
        const data: apiResponse = await res.json();
        if (data.Search) {
          setMovies(data);
        } else {
          setMovies(null);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setMovies(null);
      }
    }, 500);

    return () => clearTimeout(getData);
  }, [value]);

  return (
    <div className="home">
      <div className="homeSearch">
        <input type="text" className="homeSearchInput" onChange={(e) => setValue(e.target.value)} placeholder="Search Here..................." />
      </div>
      <MovieCard movies={movies} />
    </div>
  )
}

export default Home

/*

  search....

  random movies

*/