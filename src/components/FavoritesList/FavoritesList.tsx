import { useAppSelector } from "../../store/hooks/hooks";
import { getFavorites } from "../../store/selectors/favoritesSelector";
import { IMovie } from "../../types/types";
import { MovieListItem } from "../MovieListItem/MovieListItem";
import { StyledFavoritesList } from "./styles";

export const FavoritesList = () => {
  const { favorites } = useAppSelector(getFavorites);

  return (
    <StyledFavoritesList>
      {favorites.map(({ year, title, poster, imdbID }: IMovie) => (
        <MovieListItem
          key={imdbID}
          year={year}
          title={title}
          poster={poster}
          imdbID={imdbID}
          isFavorite={true}
        />
      ))}
    </StyledFavoritesList>
  );
};