import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { LiveStreamPage } from "./pages/LiveStreamPage";
import { LoginPage } from "./pages/LoginPage";
import { ChatPage } from "./pages/ChatPage";

const router = createBrowserRouter([
  { path: "/", element: <LiveStreamPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/chat", element: <ChatPage /> },
]);

export const App = () => <RouterProvider router={router} />;
