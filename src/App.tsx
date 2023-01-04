import { Route, Routes } from "react-router-dom";
import { MainTemplate } from "./components/MainTemplate/MainTemplate";
import { ROUTE } from "./routes/route";
import { HomePage } from "./pages/HomePage/HomePage";
import { RequireAuth } from "components";
import { FavoritesPage, SettingsPage } from "pages";


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