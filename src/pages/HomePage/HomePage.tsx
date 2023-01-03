import { useEffect } from "react";
import { LoadingMoreSpinner } from "../../components/LoadingMoreSpinner/LoadingMoreSpinner";
import { MovieList } from "../../components/MovieList/MovieList";
import { fetchMovies, fetchShowMoreMovies, updatePage } from "../../store/features/moviesSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { getMovies } from "../../store/selectors/movieSelector";

import { Clue, Container, EndMessage, ShowMoreButton } from "./styles";

export const HomePage = () => {
  const dispatch = useAppDispatch();
  const { isLoadingMore, isFound, isLoading, page } = useAppSelector(getMovies);
  const isPage = page === 100;

  const handleClickMoreMovies = () => {
    dispatch(updatePage());
    dispatch(fetchShowMoreMovies(page.toString()));
  };

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <>
      {isFound ? (
        <>
          <MovieList />
          {isLoading ? (
            <></>
          ) : (
            <Container>
              {isPage ? (
                <EndMessage>The end</EndMessage>
              ) : (
                <ShowMoreButton onClick={handleClickMoreMovies}>
                  Show more {isLoadingMore && <LoadingMoreSpinner />}
                </ShowMoreButton>
              )}
            </Container>
          )}
        </>
      ) : (
        <Clue initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          We don’t have such films
        </Clue>
      )}
    </>
  );
}