import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import LoanDetails from "../pages/LoanDetails/LoanDetails";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import AuthLayout from "../layouts/AuthLayout";
import Register from "../pages/Auth/Register/Register";
import Login from "../pages/Auth/Login/Login";
import PrivateRoute from "./PrivateRoute";
import LoanApplication from "../pages/LoanApplication/LoanApplication";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'loan-details/:id',
                loader: async({params}) => {
                    const loans = await fetch(`/loan.json`).then(res => res.json())
                    return loans.find(loan => loan.id == params.id)
                },
                element: <PrivateRoute> <LoanDetails></LoanDetails> </PrivateRoute>,
                hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>
            },
            {
                path: 'loan-application/:id',
                loader: async({params}) => {
                    const loans = await fetch(`/loan.json`).then(res => res.json())
                    return loans.find(loan => loan.id == params.id)
                },
                Component: LoanApplication,
                hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>
            }
        ]
    },
    {
        path: '/',
        Component: AuthLayout,
        children: [
            {
                path: 'register',
                Component: Register
            },
            {
                path: 'login',
                Component: Login
            }
        ]
    }
])