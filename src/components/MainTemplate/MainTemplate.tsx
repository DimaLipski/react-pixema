import { Outlet } from "react-router-dom";
import { Container } from "./styles";
import { Menu, SearchBar } from "components";
import { useWindowSize } from "hooks/useWindowSize";

export const MainTemplate = () => {
  const { width = 0 } = useWindowSize();

  return (
    <>
      <SearchBar />
      <Container>
        {width >= 1440 && <Menu />}
        <Outlet />
      </Container>
    </>
  );
};