import { useParams } from "react-router-dom"
import "./movie.css"
import { useEffect, useState } from "react";
import { imdbResponse } from "../../utils/types";

const Movie = () => {

    const { id } = useParams();
    const [movie, setMovie] = useState<imdbResponse | null>(null);
    const API_KEY = import.meta.env.VITE_API_KEY;

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`);
                const data = await response.json();
                if (data) {
                    setMovie(data);
                } else {
                    setMovie(null);
                }
            } catch (error) {
                console.error('Error fetching movie:', error);
            }
        };

        fetchMovie();
    }, [id, API_KEY]);

    return (
        <div className="movie">
            <div className="movieWrapper">
                <div className="movieWrapperImgDiv">
                    <img className="movieWrapperImage" src={movie?.Poster} alt={movie?.Title} />
                    <span className="movieWrapperTitle">{movie?.Title}</span>
                </div>
                <div className="movieWrapperDesc">
                    <span className="movieWrapperDescPlot">
                        {
                            movie?.Plot
                        }
                    </span>
                    <span className="movieWrapperDescReleased">Release Date: {movie?.Released}</span>
                    <span className="movieWrapperDescGenre">{movie?.Genre}</span>
                    <span className="movieWrapperDescRating">IMDB Rating: {movie?.imdbRating}</span>
                </div>
            </div>
        </div>
    )
}

export default Movie