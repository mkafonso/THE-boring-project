import {
  Challenge,
  Home,
  Messages,
  Settings,
  Support,
} from "../components/screens";

export const authenticatedRoutes = [
  { path: "/", component: <Home /> },
  { path: "/challenge/:challengeId", component: <Challenge /> },
  { path: "/messages", component: <Messages /> },
  { path: "/settings", component: <Settings /> },
  { path: "/support", component: <Support /> },
];
