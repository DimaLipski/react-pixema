import React from "react";
import { Route, Routes } from "react-router-dom";
import { Path } from "../../config";
import { Favorites } from "../../pages/FavoritesPage/FavoritesPage";
import { Home } from "../../pages/HomePage/HomePage";
import { Login } from "../../pages/LoginPage/LoginPage";
import { Registration } from "../../pages/ResetPasswordPage/Registration";
import { Settings } from "../../pages/SettingsPage/SettingsPage";
import { Trends } from "../../pages/TrendsPage/TrendsPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={Path.REGISTRATION} element={<Registration />} />
      <Route path={Path.LOGIN} element={<Login />} />
      <Route path={Path.HOME} element={<Home />} />
      <Route path={Path.SETTINGS} element={<Settings />} />
      <Route path={Path.FAVORITES} element={<Favorites />} />
      <Route path={Path.TRENDS} element={<Trends />} />
    </Routes>
  );
};
