import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import instance from "./axios";
import "./styles/Row.scss"
const API_KEY = "fa184ec8de620662125bd557c6ce8c16";

type Props = {
    title: string;
    fetchURL: string;
    isLargeRow?: boolean;
};

type Movie = {
    id: string;
    name: string;
    title: string;
    original_name: string;
    poster_path: string;
    backdrop_path: string;
};

type Options = {
    height: string;
    width: string;
    playerVars: {
        autoplay: 0 | 1 | undefined;
    };
};

export const Row = ({ title, fetchURL, isLargeRow}: Props) => {
    const base_URL = "https://image.tmdb.org/t/p/w185"
    const [movies, setMovies] = useState<Movie[]>([]);
    const [trailerUrl, setTrailerUrl] = useState<string | null>("");

    useEffect(() => {
        async function fetchData() {
            const request = await instance.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchURL]);

    const opts: Options = {
        height: "390",
        width: "640",
        playerVars: {
            autoplay:1 ,
        },
    };

    const handleClick = async (movie: Movie) => {
        //偶数回で非表示
        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            let trailerUrl = await instance.get(
                `/movie/${movie.id}/videos?api_key=${API_KEY}`
            );
            setTrailerUrl(trailerUrl.data.results[0]?.key);
        }
    }

    console.log(movies);

    return(
        <div className="Row">
            <h2 className="Row-title">{title}</h2>
            <div className="Row-posters">
                {movies.map((movie, i) => (
                    <img
                        key={movie.id}
                        className={`Row-poster ${isLargeRow && "Row-poster-large"}`}
                        src={`${base_URL}${
                            isLargeRow ? movie.poster_path : movie.backdrop_path
                        }`}
                        alt={movie.name}
                        onClick={() => handleClick(movie)}
                    />
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
        </div>
    );
};