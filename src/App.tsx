import { Route, Routes } from "react-router-dom";
import { MainTemplate } from "./components/MainTemplate/MainTemplate";
import { HomePage } from "./pages/HomePage/HomePage";
import { ROUTE } from "./routes/route";

export const App = () => {
  return (
    <Routes>
      <Route path={ROUTE.HOME} element={<MainTemplate />}>
        <Route index element={<HomePage />} />
        
      </Route>
      
      
    </Routes>
  );
};