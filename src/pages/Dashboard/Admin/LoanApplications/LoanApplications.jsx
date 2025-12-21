import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import LoadingSpinner from '../../../../components/LoadingSpinner/LoadingSpinner';
import { FaRegEye } from 'react-icons/fa6';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import { Link } from 'react-router';

const LoanApplications = () => {

    const [statusFilter, setStatusFilter] = useState('all');

     const axiosSecure = useAxiosSecure()

    const {isPending, data: loans = []} = useQuery({
        queryKey: ['loansApplications'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/loans-applications`);
            return res.data;
        }
    })

    const filteredLoans = statusFilter === 'all' ? loans : loans.filter(loan => loan.status === statusFilter)


    

     if(isPending){
         return <LoadingSpinner></LoadingSpinner>
    }


    console.log(loans);

    return (
           <div>
                  <SectionTitle title="Loan Applications" subtitle="All loan applications by the applicants"></SectionTitle>

                  <div className=''>
                    <details className="dropdown">
                    <summary className="btn m-1">Filter: {statusFilter}</summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">

                      <li><button onClick={() => setStatusFilter('all')}>All</button></li>
                      <li><button onClick={() => setStatusFilter('pending')}>Pending</button></li>
                      <li><button onClick={() => setStatusFilter('rejected')}>Rejected</button></li>
                      <li><button onClick={() => setStatusFilter('approved')}>Approved</button></li>
                      
                    </ul>
                  </details>
                  </div>
       
                   {/* table */}
                   <div className="overflow-x-auto">
         <table className="table table-zebra">
           {/* head */}
           <thead>
             <tr>
               <th>#</th>
               <th>Loan Id</th>
               <th>User</th>
               <th>Category</th>
               <th>Loan Amount</th>
               <th>Status</th>
               <th>Actions</th>
             </tr>
           </thead>
           <tbody>
             {filteredLoans.map((loan, i) => <tr key={loan._id}>
               <th>{i + 1}</th>
               <td>{loan._id}</td>
               <td> 
                <p className='font-semibold'><span>{loan.fName} {loan.lName}</span> </p>
                <p>{loan.applicantsEmail}</p>
               </td>
               <td>{loan.category}</td>
               <td>{loan.loanAmount}</td>
               <td>{loan.status}</td>
               <td>
                   <Link to={`/loan-details/${loan.loanId}`}  className='btn btn-sm hover:bg-green-500 hover:text-white'><FaRegEye /></Link>
               </td>
             </tr>)}
             
           </tbody>
         </table>


       </div>
               </div>
    );
};

export default LoanApplications;