import React from 'react';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import LoadingSpinner from '../../../../components/LoadingSpinner/LoadingSpinner';
import { Link } from 'react-router';

const ApprovedLoans = () => {

     const axiosSecure = useAxiosSecure()
    
         const {isPending, data: approvedLoans = [], refetch} = useQuery({
            queryKey: ['myloans'],
            queryFn: async () => {
                const res = await axiosSecure.get(`/approved-loans`);
                return res.data;
            }
        })

if(isPending){
    return <LoadingSpinner></LoadingSpinner>
}

    return (
        <div>
            <SectionTitle title="Approved Loans" subtitle="All Approved Loans"></SectionTitle>

            <div>
                <h3>Approved Loans: {approvedLoans.length}</h3>



   {/* table */}
                        <div className="overflow-x-auto">
              <table className="table table-zebra">
                {/* head */}
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Loan ID</th>
                    <th>User Info</th>
                    <th>Loan Amount</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {approvedLoans.map((loan, i) => <tr>
                    <th>{i + 1}</th>
                    <td>{loan._id}</td>
                    <td>
                    <p>{loan.applicantsEmail}</p>
                    <p>{loan.fName} {loan.lName}</p>
                    </td>
                    <td>$ {loan.loanAmount}</td>
                    <td className='text-green-500'>{loan.status}</td>
                    <td>{loan.createdAt}</td>
                    <td>
                        <Link to={`/loan-details/${loan.loanId}`} className='btn btn-sm hover:bg-gray-500 hover:text-white'>View</Link>
                    </td>
                  </tr>)}
                  
                </tbody>
              </table>
            </div>

            </div>
        </div>
    );
};

export default ApprovedLoans;