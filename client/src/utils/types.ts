export type Search = {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

export type apiResponse = {
    Search: Search[];
}

export type MovieCardProps = {
    movies: apiResponse | null;
}

export type imdbResponse = {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: [
        {
            Source: string;
            Value: string;
        }
    ];
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    totalSeasons: string;
    Response: string;
}