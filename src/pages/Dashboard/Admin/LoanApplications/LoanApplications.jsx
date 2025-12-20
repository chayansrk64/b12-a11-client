import { useQuery } from '@tanstack/react-query';
import React, { useRef, useState } from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import LoadingSpinner from '../../../../components/LoadingSpinner/LoadingSpinner';
import { FaRegEye } from 'react-icons/fa6';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';

const LoanApplications = () => {

    const modalRef = useRef(null);
    const [selectedLoan, setSelectedLoan] = useState(null);
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


    const handleShowModal = (loan) => {
        setSelectedLoan(loan)
        modalRef.current.showModal()
    }


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
                   <button onClick={() => handleShowModal(loan)} className='btn btn-sm hover:bg-green-500 hover:text-white'><FaRegEye /></button>
               </td>
             </tr>)}
             
           </tbody>
         </table>


{/* modal  */}
{/* Open the modal using document.getElementById('ID').showModal() method */}
{/* <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>open modal</button> */}
<dialog ref={modalRef} id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    
    <h3 className="font-bold text-lg">Loan Details!</h3>
   
    {
        selectedLoan && 
        <>
         <div className="hero bg-base-200 ">
  <div className="hero-content flex-col">
    <img
      src={selectedLoan.image}
      className=" rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-3xl font-bold mb-4">{selectedLoan.loanTitle}</h1>

      <p>Loan Amount $ {selectedLoan.loanAmount}</p>
      <p>Interest Rate: {selectedLoan.interestRate}</p>
      <p>Interest Rate: {selectedLoan.interestRate}</p>
      <p>applicants Email: {selectedLoan.applicantsEmail}</p>
      <p>applicants Name: {selectedLoan.fName} {selectedLoan.lName}</p>
      <p>applicants Contact: {selectedLoan.contact}</p>
      <p>income Source: {selectedLoan.incomeSource}</p>
      <p>monthly Income: {selectedLoan.monthlyIncome}</p>
      <p>reason For Loan: {selectedLoan.reasonForLoan}</p>
      <p>address: {selectedLoan.address}</p>
      <p>status: {selectedLoan.status}</p>
      <p>application FeeS tatus: {selectedLoan.applicationFeeStatus}</p>
      
    </div>
  </div>
</div>


        
        </>
    }


    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>


       </div>
               </div>
    );
};

export default LoanApplications;