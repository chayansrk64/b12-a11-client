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
import AddLoan from "../pages/Dashboard/Manager/AddLoan/AddLoan";
import ManageLoans from "../pages/Dashboard/Manager/ManageLoans/ManageLoans";
import MyProfile from "../pages/Dashboard/Manager/MyProfile/MyProfile";
import ApprovedLoans from "../pages/Dashboard/Manager/ApprovedLoans/ApprovedLoans";
import BorrowerProfile from "../pages/Dashboard/Borrower/BorrowerProfile/borrowerProfile";
import NotFound from "../components/NotFound/NotFound";



export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'loan-details/:id',
                
                element: <PrivateRoute> <LoanDetails></LoanDetails> </PrivateRoute>,
                hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>
            },
            {
                path: 'loan-application/:id',
               
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
            {
                path: 'borrower-profile',
                Component: BorrowerProfile
            },

            // manager
            {
                path: 'my-profile',
                Component: MyProfile
            },
            {
                path: 'pending-loans',
                Component: PendingLoans
            },
            {
                path: 'add-loan',
                Component: AddLoan
            },
            {
                path: 'manage-loans',
                Component: ManageLoans
            },
            {
                path: 'approved-loans',
                Component: ApprovedLoans
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