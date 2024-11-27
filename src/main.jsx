import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import {createBrowserRouter, RouterProvider} from "react-router-dom";

import "./styles/index.css";
import App from "./App.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import ApproveLoan from "./pages/ApproveLoan.jsx";
import UnApproveLoan from "./pages/UnApproveLoan.jsx";
import LoanRequest from "./pages/LoanRequest.jsx";

const router = createBrowserRouter([
    {

        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <App />
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/request',
                element: <LoanRequest />
            },
            {
                path: '/approve',
                element: <ApproveLoan />
            },
            {
                path: '/unapprove',
                element: <UnApproveLoan />
            },
        ]
    },

]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
