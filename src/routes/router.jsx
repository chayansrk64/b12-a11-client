import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import LoanDetails from "../pages/LoanDetails/LoanDetails";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

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
                hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
                loader: async({params}) => {
                    const loans = await fetch(`/loan.json`).then(res => res.json())
                    return loans.find(loan => loan.id == params.id)
                },
                Component: LoanDetails
            }
        ]
    }
])