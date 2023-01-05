import { Route, Routes } from "react-router-dom";
import { AuthTemplate, MainTemplate, RequireAuth } from "components";
import { FavoritesPage, HomePage, ResetPasswordPage, SettingsPage, SignInPage, SignUpPage,} from "pages";
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
          <Route path={ROUTE.HOME} element={<AuthTemplate />}>
          <Route path={ROUTE.SIGN_IN} element={<SignInPage />} />
      </Route>
    </Routes>
  );
};