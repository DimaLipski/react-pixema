import { IFilm } from "../../types/types";
import { FilmCard } from "../FilmCard/FilmCard";
import { StyledFilmList } from "./styles";

interface IProps {
  movies: IFilm[];
}
export const FilmList = ({ movies }: IProps) => {
  return (
    <StyledFilmList>
      {movies.map(({ imdbID, Title, Poster }) => (
        <FilmCard key={imdbID} title={Title} img={Poster} id={imdbID} />
      ))}
    </StyledFilmList>
  );
};