
import { StyledMovieList } from "./styles";
import { useAppSelector } from "../../store/hooks/hooks";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";
import { MovieListItem } from "../MovieListItem/MovieListItem";
import { getMovies } from "../../store/selectors/movieSelector";
import { IMovie } from "../../types/types";

export const MovieList = () => {
  const { isLoading, movies } = useAppSelector(getMovies);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <StyledMovieList>
      {movies.map(({ year, title, poster, imdbID }: IMovie) => (
        <MovieListItem key={imdbID} year={year} title={title} poster={poster} imdbID={imdbID} />
      ))}
    </StyledMovieList>
  );
};