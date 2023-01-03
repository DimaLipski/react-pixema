import { CustomLink } from "components";
import { ToolBar, Footer, Title } from "./styles";
import { ROUTE } from "routes";

export const Menu = () => {
  return (
    <ToolBar>
      <CustomLink to={ROUTE.HOME}>
      </CustomLink>
      <CustomLink to={ROUTE.TRENDS}>
        <Title>Trends</Title>
      </CustomLink>
      <CustomLink to={ROUTE.FAVORITES}>
        <Title>Favorites</Title>
      </CustomLink>
      <CustomLink to={ROUTE.SETTINGS}>
        <Title>Settings</Title>
      </CustomLink>
      <Footer>© All Rights Reserved</Footer>
    </ToolBar>
  );
};