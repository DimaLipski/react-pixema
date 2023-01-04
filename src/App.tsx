import { Route, Routes } from "react-router-dom";
import { MainTemplate, RequireAuth } from "components";
import { FavoritesPage, HomePage, SettingsPage,} from "pages";
import { ROUTE } from "routes";

export const App = () => {
  return (
    <Routes>
      <Route path={ROUTE.HOME} element={<MainTemplate />}>
        <Route index element={<HomePage />} />
        
        </Route>
        <Route path={ROUTE.HOME} element={<RequireAuth />}>
          <Route path={ROUTE.FAVORITES} element={<FavoritesPage />} />
          <Route path={ROUTE.SETTINGS} element={<SettingsPage />} />
        </Route>
    </Routes>
  );
};