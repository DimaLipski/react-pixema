import React from "react";
import { Path } from "../../config";

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
