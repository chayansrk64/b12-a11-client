import { useQuery } from '@tanstack/react-query';
import React, { useRef, useState } from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import LoadingSpinner from '../../../../components/LoadingSpinner/LoadingSpinner';
import { FaRegEye } from 'react-icons/fa6';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';

const LoanApplications = () => {

    const modalRef = useRef(null);
    const [selectedLoan, setSelectedLoan] = useState(null);

     const axiosSecure = useAxiosSecure()

    const {isPending, data: loans = []} = useQuery({
        queryKey: ['loansApplications'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/loans-applications`);
            return res.data;
        }
    })


    const handleShowModal = (loan) => {
        setSelectedLoan(loan)
        modalRef.current.showModal()
    }


     if(isPending){
         return <LoadingSpinner></LoadingSpinner>
    }

    console.log(selectedLoan);

    return (
           <div>
                  <SectionTitle title="Loan Applications" subtitle="All loan applications by the applicants"></SectionTitle>
       
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
             {loans.map((loan, i) => <tr>
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
    
    <h3 className="font-bold text-lg">Hello!</h3>
   
    {
        selectedLoan && 
        <>
         <div className="hero bg-base-200 min-h-screen mt-0">
  <div className="hero-content flex-col">
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      className=" rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
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