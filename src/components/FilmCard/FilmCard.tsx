import { StyledFilmCard, StyledFilmImg, StyledFilmTitle } from "./styles";


interface IProps {
  id: string;
  title: string;
  img: string;
}
export const FilmCard = ({ id, title, img }: IProps) => {
  return (
    <StyledFilmCard>
      <StyledFilmImg src={img} />
      <StyledFilmTitle>{title}</StyledFilmTitle>
    </StyledFilmCard>
  );
};