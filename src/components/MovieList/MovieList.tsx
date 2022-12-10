import { IFilm } from "../../types/types";
import { MovieCard } from "../MovieCard/MovieCard";
import { MovieList } from "./styles";

interface IProps {
  movies: IFilm[];
}
export const FilmList = ({ movies }: IProps) => {
  return (
    <MovieList>
      {movies.map(({ imdbID, Title, Poster }) => (
        <MovieCard key={imdbID} title={Title} img={Poster} id={imdbID} />
      ))}
    </MovieList>
  );
};