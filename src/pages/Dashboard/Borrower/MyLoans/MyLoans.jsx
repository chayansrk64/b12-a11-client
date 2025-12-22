import React from 'react';
import { useQuery } from '@tanstack/react-query'
import useAuth from '../../../../hooks/useAuth';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import LoadingSpinner from '../../../../components/LoadingSpinner/LoadingSpinner';
import { FaCcPaypal, FaEye, FaTrashCan } from 'react-icons/fa6';
import { Link } from 'react-router';
import { toast } from 'react-toastify';
import ConfirmDeleteToast from '../../../../components/ConfirmDeleteToast/ConfirmDeleteToast';

const MyLoans = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth();

    const {isPending, data: myloans = [], refetch} = useQuery({
        queryKey: ['myloans', user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/my-loans?email=${user?.email}`);
            return res.data;
        }
    })



  const handleDeleteLoan = (loan) => {
  toast(
    ({ closeToast }) => (
      <ConfirmDeleteToast
        onConfirm={async () => {
          try {
            await axiosSecure.delete(`/myloans/${loan._id}`); 
            toast.success('Deleted successfully');
            closeToast();
            refetch(); 
          } catch (err) {
            toast.error(err.message);
          }
        }}
        onCancel={closeToast}
      />
    ),
    {
      autoClose: false,
      closeOnClick: false,
    }
  );
};



    const handlePayment = async (loan) => {
         const loanInfo = {
            loanAmount: 1000,
            loanTitle: loan.loanTitle,
            applicantsEmail: loan.applicantsEmail,
            loanId: loan.loanId
        }

        const res = await axiosSecure.post('/payment-checkout-session', loanInfo)
        

        window.location.assign(res.data.url)

    }




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
          <Link to={`/loan-details/${loan.loanId}`} className='btn btn-sm hover:bg-gray-500 hover:text-white '>View</Link>
          {
            loan.applicationFeeStatus === 'paid' ?
             <span className='text-green-600 mx-2 bg-green-200 px-2 py-1 rounded'>Paid</span> :
              <button onClick={() => handlePayment(loan)} className='btn btn-sm hover:bg-green-500 hover:text-white mx-2'>Pay</button>
              // <Link to={`/dashboard/payment/${loan._id}`}  className='btn btn-sm hover:bg-green-500 hover:text-white mx-2'>Pay</Link>
          }
          {
            loan.status === 'pending' &&  <button onClick={() => handleDeleteLoan(loan)} className='btn  btn-sm hover:bg-red-500 hover:text-white'>Cancel</button>
          }
           

        </td>
      </tr>)}
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyLoans;