import React from "react";
import { Route, Routes } from "react-router-dom";
import { Path } from "../../config";
import { Favorites } from "../../pages/Favorites/Favorites";
import { Home } from "../../pages/Home/Home";
import { Login } from "../../pages/Login/Login";
import { Registration } from "../../pages/ResetPassword/Registration";
import { Settings } from "../../pages/Settings/Settings";
import { Trends } from "../../pages/Trends/Trends";

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
