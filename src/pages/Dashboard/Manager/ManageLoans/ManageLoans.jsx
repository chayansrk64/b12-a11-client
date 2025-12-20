import React, { useEffect, useRef, useState } from "react";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import useAuth from "../../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../../components/LoadingSpinner/LoadingSpinner";
import { FaPencilAlt } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import { toast } from "react-toastify";
import ConfirmDeleteToast from "../../../../components/ConfirmDeleteToast.jsx/ConfirmDeleteToast";

const ManageLoans = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [selectedLoan, setSelectedLoan] = useState(null)
  const modalRef = useRef(null);
  const [search, setSearch] = useState('');

  const { isPending, data: manageLoans = [], refetch } = useQuery({
    queryKey: ["manage-loans", user?.email, search],
     enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/manager/${user?.email}/loans?search=${search}`);
      return res.data;
    },
  });

  useEffect(() => {
  const timeout = setTimeout(() => {
    refetch();
  }, 500);

  return () => clearTimeout(timeout);
}, [search, refetch]);


      // open update modal 
      const openUpdateModal = loan => {
          setSelectedLoan(loan)
          // modalRef.current.showModal();
          
      }
  
       useEffect(() => {
    if (selectedLoan) {
      modalRef.current.showModal();
    }
  }, [selectedLoan]);
  
  const closeModal = () => {
    modalRef.current.close();
    setSelectedLoan(null);
  };


      // handleUpdateLoan
      const handleUpdateLoan = e => {
          e.preventDefault();
          const form = e.target;
  
         const updatedLoan = {
          title: form.title.value,
          shortDesc: form.shortDesc.value,
          interest: form.interest.value,
          category: form.category.value,
          image: form.image.value,
          maxLimit: Number(form.maxLimit.value),
      };
  
      // update loan
      axiosSecure.patch(`/loans/${selectedLoan._id}`, updatedLoan)
      .then(() => {
          toast.success("Loan updated Successfully!")
          refetch()
      })
      modalRef.current.close()
      }
  



  const handleDeleteLoan = (loan) => {
  toast(
    ({ closeToast }) => (
      <ConfirmDeleteToast
        onConfirm={async () => {
          try {
            await axiosSecure.delete(`/loans/${loan._id}`);
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



  if (isPending) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <SectionTitle
        title="Manage Loans"
        subtitle="Manage your loans"
      ></SectionTitle>

      <div>
        {/* search loan */}

        <label className="input ms-4">
            <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search" />
        </label>

        {/* manage loan table */}
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Title</th>
                <th>Interest</th>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {manageLoans.map((loan, i) => (
                <tr key={loan._id}>
                  <th>{i + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={loan.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{loan.title}</td>
                  <td>{loan.interest}</td>
                  <td>{loan.category}</td>
                  <th>
                    <button onClick={() => openUpdateModal(loan)} className="btn btn-sm me-2 hover:bg-green-500 hover:text-white">
                      <FaPencilAlt />
                    </button>
                    <button
                      onClick={() => handleDeleteLoan(loan)}
                      className="btn btn-sm hover:bg-red-500 hover:text-white"
                    >
                      <FaTrashCan />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>




  {/* update modal  */}

{/* Open the modal using document.getElementById('ID').showModal() method */}
{/* <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>open modal</button> */}
<dialog ref={modalRef} id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Update Loan</h3>
    {/* update loan */}

       {selectedLoan && (
            <form onSubmit={handleUpdateLoan} className="space-y-3">
              <input
                name="title"
                defaultValue={selectedLoan.title}
                className="input input-bordered w-full"
                placeholder="Loan Title"
                required
              />

              <input
                name="shortDesc"
                defaultValue={selectedLoan.shortDesc}
                className="input input-bordered w-full"
                placeholder="Loan Title"
                required
              />

              <input
                name="interest"
                defaultValue={selectedLoan.interest}
                className="input input-bordered w-full"
                placeholder="Interest"
                required
              />

              <input
                name="category"
                defaultValue={selectedLoan.category}
                className="input input-bordered w-full"
                placeholder="Category"
                required
              />

               <input
                name="image"
                defaultValue={selectedLoan.image}
                className="input input-bordered w-full"
                placeholder="Image URL"
                required
              />

              <input
                name="maxLimit"
                type="number"
                defaultValue={selectedLoan.maxLimit}
                className="input input-bordered w-full"
                placeholder="Max Loan Limit"
                required
              />


              <div className="modal-action">
                <button type="submit" className="btn btn-primary">
                  Update
                </button>
                <button
                  type="button"
                  className="btn"
                  onClick={closeModal}
                >
                  Cancel
                </button>
              </div>
            </form>
          )}

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

export default ManageLoans;
