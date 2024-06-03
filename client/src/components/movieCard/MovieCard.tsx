import { useNavigate } from "react-router-dom"
import { MovieCardProps } from "../../utils/types"
import "./movieCard.css"
import { useState } from "react";
import CreatePlaylist from "../createPlaylist/CreatePlaylist";

const MovieCard: React.FC<MovieCardProps> = ({ movies }) => {

  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.stopPropagation();
    setIsOpen(true);
  }

  return (
    <>
      <div className="movieCard" style={{position: isOpen ? "fixed" : "unset"}}>
        {movies?.Search ? (
          movies.Search.map((movie, idx) => (
            <div className="movieCardDiv" onClick={() => navigate(`/movie/${movie.imdbID}`)} key={idx}>
              <img className="movieCardImg" src={movie.Poster} alt={movie.Title} />
              <div className="movieCardDesc">
                <span className="movieCardTitle">{movie.Title}</span>
                <div className="movieCardDesc1">
                  <span className="movieCardPlay" onClick={(e) => handleClick(e)}>Add to Playlist</span>
                  <span className="movieCardYear">{movie.Year}</span>
                </div>

              </div>

            </div>

          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
      {isOpen && <CreatePlaylist setIsOpen={setIsOpen} />}
    </>
  )
}

export default MovieCard