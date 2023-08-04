import { Route, Routes } from "react-router-dom";
import { AppLayout } from "../components";
import { authenticatedRoutes } from "./routes";

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {authenticatedRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<AppLayout>{route.component}</AppLayout>}
        />
      ))}

      <Route path="*" element={<p>There's nothing here: 404!</p>} />
    </Routes>
  );
};
