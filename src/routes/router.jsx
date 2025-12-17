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
import DashboardLayout from "../layouts/dashboardLayout";
import MyLoans from "../pages/Dashboard/Borrower/MyLoans/MyLoans";
import PendingLoans from "../pages/Dashboard/Manager/PendingLoans/PendingLoans";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers/ManageUsers";
import LoanApplications from "../pages/Dashboard/Admin/LoanApplications/LoanApplications";
import AllLoansAdmin from "../pages/Dashboard/Admin/AllLoansAdmin/AllLoansAdmin";
import AllLoans from "../pages/AllLoans/AllLoans";

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
            },
            {
                path: 'all-loans',
                Component: AllLoans
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
    },
    {
        path: 'dashboard',
        element: <PrivateRoute> <DashboardLayout></DashboardLayout> </PrivateRoute>,
        children: [
            // borrower
            {
                path: 'my-loans',
                Component: MyLoans
            },
            // manager
            {
                path: 'pending-loans',
                Component: PendingLoans
            },
            // admin
            {
                path: 'manage-users',
                element: <ManageUsers></ManageUsers>
            },
            {
                path: 'all-loans-admin',
                element: <AllLoansAdmin></AllLoansAdmin>
            },
            {
                path: 'loan-applications',
                element: <LoanApplications></LoanApplications>
            }
        ]
    }
])