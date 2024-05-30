import { useNavigate } from "react-router-dom"
import { MovieCardProps } from "../../utils/types"
import "./movieCard.css"

const MovieCard: React.FC<MovieCardProps> = ({ movies }) => {

  const navigate = useNavigate();

  return (
    <div className="movieCard">
      {movies?.Search ? (
        movies.Search.map((movie, idx) => (
          <div className="movieCardDiv" onClick={()=> navigate(`/movie/${movie.imdbID}`)} key={idx}>
            <img className="movieCardImg" src={movie.Poster} alt={movie.Title} />
            <div className="movieCardDesc">
              <span className="movieCardTitle">{movie.Title}</span>
              <span className="movieCardType">{movie.Type}</span>
              <span className="movieCardYear">{movie.Year}</span>
            </div>

          </div>

        ))
      ) : (
        <div>No data found</div>
      )}
    </div>
  )
}

export default MovieCard