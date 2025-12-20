import React from "react";
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

  const { isPending, data: manageLoans = [], refetch } = useQuery({
    queryKey: ["manage-loans", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/manager/${user?.email}/loans`);
      return res.data;
    },
  });



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
                    <button className="btn btn-sm me-2 hover:bg-green-500 hover:text-white">
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
      </div>
    </div>
  );
};

export default ManageLoans;
