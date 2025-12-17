import React from 'react';
import LoadingSpinner from '../../../../components/LoadingSpinner/LoadingSpinner';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { FaTrashCan } from 'react-icons/fa6';

const PendingLoans = () => {

    const axiosSecure = useAxiosSecure()

     const {isPending, data: pendingloans = []} = useQuery({
        queryKey: ['myloans'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/pending-loans`);
            return res.data;
        }
    })

     if(isPending){
         return <LoadingSpinner></LoadingSpinner>
    }


    return (
        <div>
            <h3 className="text-3xl">Pending loans: {pendingloans.length}</h3>

             {/* table */}
                        <div className="overflow-x-auto">
              <table className="table table-zebra">
                {/* head */}
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Interest Rate</th>
                    <th>Loan Amount</th>
                    <th>Status</th>
                    <th>Application Fee Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {pendingloans.map((loan, i) => <tr>
                    <th>{i + 1}</th>
                    <td>{loan.loanTitle}</td>
                    <td>{loan.interestRate}</td>
                    <td>{loan.loanAmount}</td>
                    <td>{loan.status}</td>
                    <td>{loan.applicationFeeStatus}</td>
                    <td>
                        <button className='btn btn-sm hover:bg-red-500 hover:text-white'><FaTrashCan /></button>
                    </td>
                  </tr>)}
                  
                </tbody>
              </table>
            </div>
        </div>
    );
};

export default PendingLoans;