import { Outlet } from "react-router-dom";
import { Container } from "./styles";
import { SearchBar } from "../SearchBar/SearchBar";
import { useWindowSize } from "../../hooks/useWindowSize";
import { Menu } from "../Menu/Menu";

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