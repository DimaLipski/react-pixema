import React, { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './components/AppRouter/AppRouter';
import { MenuNav } from './components/MenuNav/MenuNav';
import { AppWrapper } from './ui';

type Theme = "dark" | "light";

export const App = () => {
  const [theme, setTheme] = useState<Theme>("dark");
  useEffect(() => document.documentElement.setAttribute("theme", theme), [theme]);

  return (
    <BrowserRouter>
      <AppWrapper>
        <MenuNav />
        <AppRouter />
      </AppWrapper>
    </BrowserRouter>
  );
};