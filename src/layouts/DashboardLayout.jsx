import React from 'react';
import { MdAttachMoney, MdManageAccounts, MdOutlineAddCard, MdOutlinePendingActions } from 'react-icons/md';
import { GiMoneyStack } from "react-icons/gi";
import { GrUserManager } from "react-icons/gr";
import { TfiWrite } from "react-icons/tfi";
import { Link, NavLink, Outlet } from 'react-router';
import useRole from '../hooks/useRole';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';
import { FcApproval } from "react-icons/fc";
import { CgProfile } from "react-icons/cg";
import Navbar from '../pages/Shared/Header/Navbar';
import Footer from '../pages/Shared/Footer/Footer';

const DashboardLayout = () => {

    const {roleLoading, role} = useRole()

     if(roleLoading){
        return <LoadingSpinner></LoadingSpinner>
    }


    return (
        <div className=''>
            <div className="drawer lg:drawer-open">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
     <Navbar></Navbar>
    {/* Navbar */}
    <nav className="navbar w-full bg-secondary">
      <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
        {/* Sidebar toggle icon */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
      </label>
      <div className="px-4">Dashboard of <span className='text-primary font-bold text-lg'>{role}</span></div>
    </nav>
    {/* Page content here */}
    <div className='flex flex-col min-h-screen'>
      <main className='flex-1'>
       
        <Outlet></Outlet>
      </main>
    <Footer></Footer>
    </div>
    {/* <div className="p-4">Page Content</div> */}
  </div>

  <div className="drawer-side is-drawer-close:overflow-visible">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    <div className="flex min-h-full flex-col items-start bg-gray-300 is-drawer-close:w-14 is-drawer-open:w-64">
      {/* Sidebar content here */}
      <ul className="menu w-full grow">
        {/* List item */}
        <li>
          <Link to="/" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Homepage">
            {/* Home icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
            <span className="is-drawer-close:hidden">Homepage</span>
          </Link>
        </li>

        {/* our links */}

        {/* borrower routes */}
        {
            role === 'borrower' && <>
                
                <li>
                    <NavLink to="/dashboard/borrower-profile" className="is-drawer-close:tooltip is-drawer-close:tooltip-right"  data-tip="my Profile">
                    <span className="my-1.5 inline-block size-4 text-xl"> <CgProfile /> </span>
                    <span className="is-drawer-close:hidden">My Profile</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/my-loans" className="is-drawer-close:tooltip is-drawer-close:tooltip-right"  data-tip="my Loans">
                    <span className="my-1.5 inline-block size-4 text-xl"> <MdAttachMoney /> </span>
                    <span className="is-drawer-close:hidden">My Loans</span>
                    </NavLink>
                </li>
            
            </>
        }

        {/* manager routes */}
        {
            role === 'manager' && <>
                 <li>
                    <NavLink to="/dashboard/my-profile" className="is-drawer-close:tooltip is-drawer-close:tooltip-right"  data-tip="My Profile">
                    <span className="my-1.5 inline-block size-4 text-xl"> <CgProfile /> </span>
                    <span className="is-drawer-close:hidden">My Profile</span>
                    </NavLink>
                </li>
                 <li>
                    <NavLink to="/dashboard/pending-loans" className="is-drawer-close:tooltip is-drawer-close:tooltip-right"  data-tip="Pending Loans">
                    <span className="my-1.5 inline-block size-4 text-xl"> <MdOutlinePendingActions /> </span>
                    <span className="is-drawer-close:hidden">Pending Loans</span>
                    </NavLink>
                </li>
                 <li>
                    <NavLink to="/dashboard/add-loan" className="is-drawer-close:tooltip is-drawer-close:tooltip-right"  data-tip="Add Loan">
                    <span className="my-1.5 inline-block size-4 text-xl"> <MdOutlineAddCard /> </span>
                    <span className="is-drawer-close:hidden">Add Loan</span>
                    </NavLink>
                </li>
                 <li>
                    <NavLink to="/dashboard/manage-loans" className="is-drawer-close:tooltip is-drawer-close:tooltip-right"  data-tip="Manage Loans">
                    <span className="my-1.5 inline-block size-4 text-xl"> <MdManageAccounts /></span>
                    <span className="is-drawer-close:hidden">Manage Loans</span>
                    </NavLink>
                </li>
                 <li>
                    <NavLink to="/dashboard/approved-loans" className="is-drawer-close:tooltip is-drawer-close:tooltip-right"  data-tip="Approved Loans">
                    <span className="my-1.5 inline-block size-4 text-xl"> <FcApproval /></span>
                    <span className="is-drawer-close:hidden">Approved Loans</span>
                    </NavLink>
                </li>
            </>
        }

        {/* admin routes */}
        {
            role === 'admin' && <>
                <li>
                    <NavLink to="/dashboard/manage-users" className="is-drawer-close:tooltip is-drawer-close:tooltip-right"  data-tip="Manage Users">
                    <span className="my-1.5 inline-block size-4 text-xl"> <GrUserManager /> </span>
                    <span className="is-drawer-close:hidden">Manage Users</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/all-loans-admin" className="is-drawer-close:tooltip is-drawer-close:tooltip-right"  data-tip="All Loans">
                    <span className="my-1.5 inline-block size-4 text-xl"> <GiMoneyStack /> </span>
                    <span className="is-drawer-close:hidden">All Loans</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/loan-applications" className="is-drawer-close:tooltip is-drawer-close:tooltip-right"  data-tip="Loan Applications">
                    <span className="my-1.5 inline-block size-4 text-xl"> <TfiWrite /> </span>
                    <span className="is-drawer-close:hidden">Loan Applications</span>
                    </NavLink>
                </li>
            </>
        }
        
        

        {/* List item */}
        <li>
          <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Settings">
            {/* Settings icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M20 7h-9"></path><path d="M14 17H5"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
            <span className="is-drawer-close:hidden">Settings</span>
          </button>
        </li>
      </ul>
    </div>
  </div>
</div>
        </div>
    );
};

export default DashboardLayout;