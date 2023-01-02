import { CustomLink } from "components";
import { ToolBar, Title, Wrapper, CloseButton } from "./styles";
import { ROUTE } from "routes";
import { Color } from "ui";
import { AnimatePresence } from "framer-motion";

interface IProps {
  setToggle: () => void;
  toggle: boolean;
}

export const BurgerMenu = ({ setToggle, toggle }: IProps) => {
  return (
    <AnimatePresence>
      {toggle && (
        <Wrapper
          animate={{ x: 0 }}
          initial={{ x: 300 }}
          transition={{ delay: 0.3 }}
          exit={{ x: 550 }}
        >
          <CloseButton onClick={() => setToggle()}>

          </CloseButton>
          <ToolBar>
            <CustomLink onClick={() => setToggle()} to={ROUTE.HOME}>

            </CustomLink>
            <CustomLink onClick={() => setToggle()} to={ROUTE.TRENDS}>

              <Title>Trends</Title>
            </CustomLink>
            <CustomLink onClick={() => setToggle()} to={ROUTE.FAVORITES}>

              <Title>Favorites</Title>
            </CustomLink>
            <CustomLink onClick={() => setToggle()} to={ROUTE.SETTINGS}>

              <Title>Settings</Title>
            </CustomLink>
          </ToolBar>
        </Wrapper>
      )}
    </AnimatePresence>
  );
};
