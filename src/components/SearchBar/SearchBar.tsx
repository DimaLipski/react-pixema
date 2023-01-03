import { useEffect, useState } from "react";
import {
  BurgerButton,
  Container,
  Input,
  LogoIcon,
  SearchButton,
  UserMenu,
  UserName,
  UserNavigate,
  Wrapper,
} from "./styles";
import { useMatch, useNavigate } from "react-router-dom";
import { ROUTE } from "../../routes/route";
import { CustomLink } from "../CustomLink/CustomLink";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { SearchMenu } from "../SearchMenu/SearchMenu";
import { getUserInfo } from "../../store/selectors/userSelectors";
import { useAppDispatch } from "../../store/hooks/hooks";
import { useWindowSize } from "../../hooks/useWindowSize";
import { useDebounce, useInput, useToggle } from "../../hooks";
import { fetchMovies, fetchSortMovies } from "../../store/features/moviesSlice";
import { BurgerIcon, logoIcon, logoLightIcon, SearchIcon } from "../../assets";

export const SearchBar = () => {
  const { name, isAuth, isDark } = useAppSelector(getUserInfo);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isHome = useMatch(ROUTE.HOME);
  const { width = 0 } = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);
  const [toggle, setToggle] = useToggle(false);
  const { value, onChange, setValue } = useInput("");
  const debounceValue = useDebounce(value, 1000);

  useEffect((): void => {
    if (debounceValue) {
      dispatch(fetchSortMovies(debounceValue));
    } 
    else {
      dispatch(fetchMovies());
    }
  }, [debounceValue, dispatch, navigate, setValue, isHome]);
  return (
    <Wrapper>
      {isDark === "dark" ? <LogoIcon src={logoIcon} /> : <LogoIcon src={logoLightIcon} />}
      <Container>
        <Input
          onClick={() => navigate(ROUTE.HOME)}
          type="text"
          placeholder="Search"
          value={value}
          onChange={onChange}
        />
        <SearchButton
          onClick={() => {
            setIsOpen(true);
            navigate(ROUTE.HOME);
          }}
        >
          <SearchIcon />
        </SearchButton>
      </Container>
      {width > 1440 ? (
        <UserMenu>
          <UserName>{isAuth ? name[0].toUpperCase() : "No"}</UserName>
          <UserNavigate>
            {isAuth ? (
              <CustomLink to={`/${ROUTE.SETTINGS}`}>Edit profile</CustomLink>
            ) : (
              <CustomLink to={`/${ROUTE.SIGN_IN}`}> Sign In</CustomLink>
            )}
          </UserNavigate>
        </UserMenu>
      ) : (
        <BurgerButton
          onClick={() => {
            setToggle();
          }}
        >
          <BurgerIcon />
        </BurgerButton>
      )}
      {toggle === true && <BurgerMenu setToggle={setToggle} toggle={toggle} />}
      {isOpen === true && <SearchMenu setIsOpen={setIsOpen} isOpen={isOpen} />}
    </Wrapper>
  );
};
