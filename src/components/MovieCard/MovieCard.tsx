import { MovieImg, MovieTitle, StyledFilmCard } from "./styles";


interface IProps {
  id: string;
  title: string;
  img: string;
}
export const MovieCard = ({ id, title, img }: IProps) => {
  return (
    <StyledFilmCard>
      <MovieImg src={img} />
      <MovieTitle>{title}</MovieTitle>
    </StyledFilmCard>
  );
};