import { useEffect } from "react";
import { fetchTrends } from "../../store/features/trendsSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { getTrends } from "../../store/selectors/trendsSelector";
import { IMovie } from "../../types/types";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";
import { MovieListItem } from "../MovieListItem/MovieListItem";
import { StyledMovieList } from "./styles";

interface IProps {
  value: string;
}

export const TrendsList = ({ value }: IProps) => {
  const dispatch = useAppDispatch();
  const { isLoading, trends } = useAppSelector(getTrends);

  useEffect(() => {
    dispatch(fetchTrends(value));
  }, [dispatch, value]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <StyledMovieList>
      {trends.map(({ year, title, poster, imdbID }: IMovie) => (
        <MovieListItem
          key={imdbID}
          year={year}
          title={title}
          poster={poster}
          imdbID={imdbID}
          isTrend={true}
        />
      ))}
    </StyledMovieList>
  );
};