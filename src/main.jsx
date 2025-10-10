import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login.jsx";
import UsersPage from "./pages/users.jsx";
import BooksPage from "./pages/books.jsx";
import RegisterPage from "./pages/register.jsx";
import "./styles/global.css";
import TodoApp from "./components/todo/TodoApp.jsx";
import ErrorPage from "./pages/error.jsx";
import { AuthWrapper } from "./components/context/auth.context.jsx";

import PrivateRoute from "./pages/private.route.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <TodoApp />,
      },
      {
        path: "/users",
        element: <UsersPage></UsersPage>,
      },
      {
        path: "/books",
        element: <BooksPage></BooksPage>,
        path: "/books",
        element: (
          <PrivateRoute>
            <BooksPage />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthWrapper>
    <React.StrictMode>
      {/* <App /> */}
      <RouterProvider router={router} />
    </React.StrictMode>
  </AuthWrapper>
);
