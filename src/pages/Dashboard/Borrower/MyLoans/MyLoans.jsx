import React from 'react';
import { useQuery } from '@tanstack/react-query'
import useAuth from '../../../../hooks/useAuth';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import LoadingSpinner from '../../../../components/LoadingSpinner/LoadingSpinner';
import { FaEye, FaTrashCan } from 'react-icons/fa6';
import { Link } from 'react-router';

const MyLoans = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth();

    const {isPending, data: myloans = []} = useQuery({
        queryKey: ['myloans', user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/my-loans?email=${user?.email}`);
            return res.data;
        }
    })

     if(isPending){
         return <LoadingSpinner></LoadingSpinner>
    }

    return (
        <div>
            <h3 className="text-3xl">my loans {myloans.length}</h3>

            {/* table */}
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Title</th>
        <th>Loan Id</th>
        <th>Interest Rate</th>
        <th>Loan Amount</th>
        <th>Status</th>
        <th>Application Fee Status</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {myloans.map((loan, i) => <tr>
        <th>{i + 1}</th>
        <td>{loan.loanTitle}</td>
        <td>{loan.loanId}</td>
        <td>{loan.interestRate}</td>
        <td>{loan.loanAmount}</td>
        <td>{loan.status}</td>
        <td>{loan.applicationFeeStatus}</td>
        <td>
            <button className='btn btn-sm hover:bg-red-500 hover:text-white'><FaTrashCan /></button>
            <Link to={`/loan-details/${loan.loanId}`} className='btn btn-sm hover:bg-gray-500 hover:text-white'><FaEye /></Link>

        </td>
      </tr>)}
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyLoans;