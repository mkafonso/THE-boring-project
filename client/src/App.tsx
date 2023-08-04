import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./navigation";

export function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
