import { useEffect, useState } from "react";
import { getTrendingMovies } from "../utils/utils";
import { MovieType } from "../types/types";
import { useNavigate } from "react-router-dom";

type Props = {
  apiCall?: () => Promise<{ results: MovieType[] }>;
  title: string;
};

const MovieHome = ({ apiCall = getTrendingMovies, title }: Props) => {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await apiCall();
        setMovies(data.results);
        setIsError(false);
      } catch {
        setMovies([]);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, [apiCall]);

  const handleMovieClick = async (id: number) => {
    navigate(`/detail/${id}`);
  };

  if (isError) {
    return <h1 className="text-white text-2xl p-4">에러가 발생했습니다</h1>;
  }

  return (
    <div className="p-4 mb-4">
      <h2 className="text-white text-3xl mb-6 font-bold">{title}</h2>
      <div className="grid grid-cols-5 gap-8">
        {movies.map((movie) => (
          <div
            key={movie.id}
            onClick={() => handleMovieClick(movie.id as number)}
            className="text-white hover:scale-110 transition cursor-pointer"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title || movie.name}
              className="w-full h-[90%] rounded"
            />
            <p className="mt-4 text-lg">{movie.title || movie.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieHome;