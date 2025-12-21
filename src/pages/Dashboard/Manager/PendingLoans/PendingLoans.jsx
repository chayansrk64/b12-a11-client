import React from 'react';
import LoadingSpinner from '../../../../components/LoadingSpinner/LoadingSpinner';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { IoMdDoneAll } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import { FaRegEye } from 'react-icons/fa6';
import { Link } from 'react-router';
import { toast } from 'react-toastify';


const PendingLoans = () => {

    const axiosSecure = useAxiosSecure()

     const {isPending, data: pendingloans = [], refetch} = useQuery({
        queryKey: ['myloans'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/pending-loans`);
            return res.data;
        }
    })



     const handleStatusApprove = loan => {
      const statusInfo = {status : 'approved'}
        axiosSecure.patch(`/status/${loan._id}`, statusInfo)
        .then(res => {
          if(res.data.modifiedCount){
            refetch()
            toast.success("Status Updated")        
          }
        })
    }

     const handleStatusReject = loan => {
      const statusInfo = {status : 'rejected'}
        axiosSecure.patch(`/status/${loan._id}`, statusInfo)
        .then(res => {
          if(res.data.modifiedCount){
            refetch()
            toast.success("Status Updated")        
          }
        })
    }






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
                    <th>Loan ID</th>
                    <th>User Info</th>
                    <th>Loan Amount</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {pendingloans.map((loan, i) => <tr>
                    <th>{i + 1}</th>
                    <td>{loan._id}</td>
                    <td>
                    <p>{loan.applicantsEmail}</p>
                    <p>{loan.fName} {loan.lName}</p>
                    </td>
                    <td>$ {loan.loanAmount}</td>
                    <td>{loan.status}</td>
                    <td>{loan.createdAt}</td>
                    <td>
                        <button onClick={() => handleStatusApprove (loan)} className='btn btn-sm hover:bg-green-500 hover:text-white'>Approve</button>
                        <button onClick={() => handleStatusReject (loan)}  className='btn btn-sm hover:bg-red-500 hover:text-white mx-2'>Reject</button>
                        <Link to={`/loan-details/${loan.loanId}`} className='btn btn-sm hover:bg-gray-500 hover:text-white'>View</Link>
                    </td>
                  </tr>)}
                  
                </tbody>
              </table>
            </div>
        </div>
    );
};

export default PendingLoans;